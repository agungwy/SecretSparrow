<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\CategoryModel;
use App\CategoryUserModel;

class CategoryController extends Controller
{
    //
   public function getCategory(){
	$categories = CategoryModel::all();
	return $categories;
	}

  public function selectCategory(Request $request){
    $datas=$request->all();
    foreach($datas as $data){
      CategoryUserModel::create([
        'category_name' => $data['category_name'],
        "user_id" => $data['user_id']
      ]);
    }
    return response()->json(['message'=>'success'],201);
  }
}
