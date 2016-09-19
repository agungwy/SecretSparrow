<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\ProductPageModel;
use App\Http\Requests;
use Validator;
use Mail;
use Carbon\Carbon;
use App\CounterModel;
use App\SocialNetworkModel;
// use Youtube;

class ProductPageController extends Controller
{
    //
    // public function getYoutube(){
    //     // Return an STD PHP object
    //     $video = Youtube::getVideoInfo('rie-hPVJ7Sw');
    //     return $video;
    // }

    public function registerTester(Request $request){
    	$validator = $this->validator($request->all());
        if ($validator->fails()) {
            return response()->json($validator->messages(),400);
            // return($validator->messages());
        }else{
            $data=$request->all();
            $todos=ProductPageModel::create([
				'tester_id'=>uniqid($data['email'],true),
				'name'=>$data['name'],
				'email'=>$data['email']
			]);

			// echo(public_path().'/adroid-debug.apk');
			// Mail::send('emails.SecretSparrow', ['user' => $todos], function ($m) use ($todos) {
	  //           $m->from('teamincognito@sparkpostbox.com', 'SecretSparrow');

	  //           $m->to($todos->email, $todos->name)->subject('Testing Application Request');
	  //       });
            return response()->json([ 'message' => 'Registration Complete!' ], 201);
        }
    }
    public function getView(Request $request){
        $ip=$request->ip();
        $request->session()->forget('visit');
        $session=$request->session()->all();
        $todos=CounterModel::where('session_id',$session["_token"])->get();
        if(!$request->session()->has('visit') && count($todos)==0){
            CounterModel::create([
                'ip_address'=>$ip,
                'session_id'=>$session["_token"],
                ]);
            $todos =[
                'ip'=>$ip,
                'session'=>$session
            ];
            $request->session()->put('visit',true);
            
        }
        return view('index');
        // $request->session()->put('visit',0);       

    }
    public function getVisitors(Request $request){
        $data=$request->all();
        $todos= CounterModel::all();
        $now=Carbon::now();
        $YMD=Carbon::createFromDate($data['year'], $data['month'], $data['date'], 'Australia/Brisbane');
        $temp=array();
        foreach ($todos as $todo) {
            # code...
            $created_at=$todo->created_at->tz('Australia/Brisbane');
            $created_at->setTimeZone('Australia/Brisbane');
            $stored=Carbon::createFromDate($created_at->year,$created_at->month,$created_at->day,'Australia/Brisbane');
            // print_r($created_at);
            // print_r($created_at->tz('Australia/Brisbane'));
            // print_r($YMD);
            // print_r($YMD->tz('Australia/Brisbane'));
            if($stored->lte($YMD->tz('Australia/Brisbane'))){
                // echo "masuk";
                // $created_at->tz('Australia/Brisbane');
                array_push($temp, $todo);
            }
        }
        return [
            "count"=>count($temp),
            "testers"=>$temp
            ];
    }

    public function setSocialNetwork(Request $request){
        $data=$request->all();
        $todos=SocialNetworkModel::find($data['platform']);
        if(count($todos)==0){
            SocialNetworkModel::create([
                    'platform'=>$data['platform'],
                    'score'=>$data['count']
                ]);
            return response()->json(['message'=>'Success'],201);
        }else{
            $todos->score=$data['count'];
            $todos->save();
            return response()->json(['message'=>'Success'],201);
        }

    }
    public function getSocial(){
        $data=$request->all();
        $todos= SocialNetworkModel::all();
        // $now=Carbon::now();
        // $YMD=Carbon::createFromDate($data['year'], $data['month'], $data['date'], 'Australia/Brisbane');
        return $todos;
    }

    public function getTesters(Request $request){
        $data=$request->all();
        $todos= ProductPageModel::all();
        $now=Carbon::now();
        $YMD=Carbon::createFromDate($data['year'], $data['month'], $data['date'], 'Australia/Brisbane');
        $temp=array();
        foreach ($todos as $todo) {
            # code...
            $created_at=$todo->created_at->tz('Australia/Brisbane');
            $created_at->setTimeZone('Australia/Brisbane');
            $stored=Carbon::createFromDate($created_at->year,$created_at->month,$created_at->day,'Australia/Brisbane');
            // print_r($created_at);
            // print_r($created_at->tz('Australia/Brisbane'));
            // print_r($YMD);
            // print_r($YMD->tz('Australia/Brisbane'));
            if($stored->lte($YMD->tz('Australia/Brisbane'))){
                // echo "masuk";
                // $created_at->tz('Australia/Brisbane');
                array_push($temp, $todo);
            }
        }
        return [
            "count"=>count($temp),
            "testers"=>$temp
            ];
    }

    public function getFile($user_id){
    	$user_id=explode('/', $user_id);
    	$users=ProductPageModel::find($user_id[0]);
    	if(count($users)>0){
    		return  response()->download(public_path().'/android-debug.apk', 'android-debug.apk', ['Content-Type'=>'application/vnd.android.package-archive']); 
    	}else{
    		return response()->json([ 'message' => 'Not Found' ], 404);
    	}
    }

    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => 'required|max:255',
            'email' => 'required|email|max:255|unique:mysql2.tester,email'
        ]);
    }
}
