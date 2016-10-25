<?php

namespace App\Http\Controllers\Auth;

use App\User;
use Validator;
use Hash;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\ThrottlesLogins;
use Illuminate\Foundation\Auth\AuthenticatesAndRegistersUsers;
use Illuminate\Http\Request;
use App\CrowdiesModel;
use App\TwitterAuthModel;

class AuthController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Registration & Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users, as well as the
    | authentication of existing users. By default, this controller uses
    | a simple trait to add these behaviors. Why don't you explore it?
    |
    */

    use AuthenticatesAndRegistersUsers, ThrottlesLogins;

    /**
     * Where to redirect users after login / registration.
     *
     * @var string
     */
    protected $redirectTo = '/';

    /**
     * Create a new authentication controller instance.
     *
     * @return void
     */
    public function __construct()
    {
//        $this->middleware($this->guestMiddleware(), ['except' => 'logout']);
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => 'required|max:255',
            'email' => 'required|email|max:255|unique:oauth_users,username',
            'password' => 'required|min:6|confirmed',
        ]);
    }

    /*
        This method handles the role registration os newly registered
        users
    */

    public function role(Request $request){
        $data=$request->all();
        $todos=User::find($data['user_id']);
        if(count($todos)>0){
            $todos->role=$data['role'];
            $todos->save();
            if($data["role"]=="crowdies"){
                $this->registerCrowdies($data);
            }
            return response()->json(['message'=>'success'],201);
        }else{
            return response()->json(['message'=>'Not Found'],404);
        }
    }

    /*
        This method will be invoked when the newly registered user 
        wants to be a crowdies. It is called by the role method.
    */

    private function registerCrowdies($data){
        return CrowdiesModel::create([
            "crowdies_id"=>$data["user_id"],
            "profile_picture_url"=>"",
            "profile_picture_filename"=>"",
            "profile_picture_filepath"=>"",
            "points"=>0
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return User
     */
    protected function create(array $data)
    {
        return User::create([
            'name' => $data['name'],
            'username' => $data['email'],
            'password' => bcrypt($data['password']),
            'user_id' =>uniqid($data['email'],true),
            'email'=> $data["email"],
        ]);
    }

    /*
        This method handles the registration of new user.
        Every input to this method should be validated. 
        It'll call the validator function.
    */

    public function postRegister(Request $request)
    {
        $validator = $this->validator($request->all());
        if ($validator->fails()) {
            return response()->json($validator->messages(),400);
            // return($validator->messages());
        }else{
            $this->create($request->all());
            return response()->json([ 'message' => 'Registration Complete!' ], 201);
        }
    }

    /*
        This function is designed to retrieve the detailed information of a user. 
        Then, we checked to the database what role is the user. 
        BO detailed information will be different from crowdies information.
    */
    public function getUserDetail($user_id){
        $todos=User::find($user_id);
        if(count($todos)>0){
            if($todos["role"]=="business owner"){
                $todos->bo;    
            }else if($todos["role"]=="crowdies"){
                $todos->crowdies;
            }
            return $todos;
        }else{
            return response()->json(['message'=>'Not Found'],404);
        }
    
    }
    /*
        This function is designed to retrieve the detailed information of a user. 
        However, the information returned isn't as sepcific on the returned value from 
        getUserDetail function.
    */
    public function getUserProfile(Request $request){
        $data=$request->all();
        $todos=User::find($data['user_id']);
        if(count($todos)>0){
            return $todos;
        }else{
            return response()->json(['message'=>'Not Found'],404);
        }
    }
     /*
        This function is called when the user (crowdies or bo) want to edit their profile. 
        Crowdies can change profile image meanwhile the bo can't do that. 
        BO can edit available position but crowdies can't.
    */
    public function editProfile(Request $request){
        $user_id=$request->input('user_id');
        $todos=User::find($user_id);
        if(count($todos)>0){
            $validator = $this->validatorEditProfile($request->all());
            if($validator->fails()){
                return response()->json($validator->messages(),400);
            }else{
                // if ($request->hasFile('photo')) {
                    $file=$request->file('photo');
                    $file->move(public_path()."/profile-images/",$user_id.'.png');
                    if($todos['role']=='crowdies'){
                        $crowdies=CrowdiesModel::find($user_id);
                        $crowdies->profile_picture_filename=$user_id.'.png';
                        $crowdies->profile_picture_filepath="/profile-images/".$user_id.'.png';
                        $crowdies->profile_picture_url="/api/user/picture/".$user_id;
                        $crowdies->save();
                    }
                    // ob_end_clean();
                    // return  response()->download(public_path()."/profile-images/testing.png", 'testing.png', ['Content-Type'=>'image/png']);
                // }

                if($request->has('name')){
                    $todos->name=$request->input('name');
                    $todos->save();
                }
                if($request->has('position')){
                    if($todos["role"]=="business owner"){
                        $position=$request->input('position');
                        $account= TwitterAuthModel::where('user_id',$user_id)
                                                  ->update(['position'=>$position]);
                    }
                    
                }

                return response()->json(["message"=>"Profile Edited"],201);
            }
        }else{
            return response()->json(["message"=>"Not Found"],404);
        }
        
       
    }
    /*
        This is the validator for edit profile functionality.
    */
    protected function validatorEditProfile(array $data){
        return Validator::make($data, [
            'name' => 'required|max:255',
            'position'=>'required_if:role,bo|numeric',
            'role'=> 'required'
        ]);
    }
    /*
        This is the validator for change password functionality.
    */
    protected function validatorChangePassword(array $data){
        return Validator::make($data, [
            'password' => 'required|min:6|confirmed'
        ]);
    }
    /*
        This function is called when to load the profile image. 
    */
    public function showProfilePicture($id){
        $segments = explode('/', $id);
        $todos=User::find($segments[0]);
        // print_r($todos);

        if(count($todos)>0){
            if($todos['role']=="crowdies"){
                $crowdies=CrowdiesModel::find($segments[0]);

                $path=$crowdies['profile_picture_filepath'];
                $filename=$crowdies['profile_picture_filename'];
                ob_end_clean();
            
                return  response()->download(public_path().$path, $filename, ['Content-Type'=>'image/png']);
            }
            
            
        }else{
            return response()->json([
                'message'=>'NOT FOUND'
            ],404);
        }
    }
    /*
        This function is called when the user (crowdies or bo) want to edit their password. 
        Both role can do the functionality.
    */
    public function changePassword(Request $request){
        $data=$request->all();
        $todos=User::find($data["user_id"]);
        if(count($todos)>0){
            $validator = $this->validatorChangePassword($request->all());
            if($validator->fails()){
                return response()->json($validator->messages(),400);
            }else{
                $todos->password=bcrypt($data['password']);
                $todos->save();
            }
            return response()->json(["message"=>"Password Changed"],201);
        }else{
            return response()->json([
                'message'=>'NOT FOUND'
            ],404);
        }
    }


    
    
   
}
