<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;


class ExampleTest extends TestCase
{
    use WithoutMiddleware;
    /**
     * A basic functional test example.
     *
     * @return void
     */
    // public function testBasicExample()
    // {
    //     $this->visit('/')
    //          ->see('Laravel 5');
    // }

    public function test1(){
        $response=$this->call('POST','/auth/twitter/callback',[]);
        $this->assertEquals(500, $response->status());
    }
    public function test2(){
        $response=$this->call('POST','/auth/twitter/callback',['ss_user_id'=>"asd"]);
        $this->assertEquals(404, $response->status());
    }
    public function test3(){
        $response=$this->call('POST','/auth/twitter/callback',[
            'ss_user_id'=>"william.hidayat12@gmail.com580afda401e529.84408229",
            "twitter"=>[
                    "oauth_token"=>'83309209-8AXPeaA1w16SXrwhvjmcGvROFMgg5m1qRETn5ab1B',
                    "oauth_token_secret"=>'Myd6GcwDiaJnxuQG6QIGwAlpNO1K9nNbdiWDTdWOMnzV1',
                    'screen_name'=>'williamhenry_94',
                    'user_id'=>'83309209'

                ]
            ]);
        $this->assertEquals(403, $response->status());
    }
    public function test4(){
        $response=$this->call('POST','/auth/twitter/callback',[
            'ss_user_id'=>"william.hidayat12@gmail.com580afda401e529.84408229",
            "twitter"=>[
                    "oauth_token"=>'89961966-GETZ1I9HHjesGR5jD2pmvL0jPQnmR7Eh8BKseWjSa',
                    "oauth_token_secret"=>'GejxYOZ9n9wYQEia594xWlinCmnYK0y3hHNiAPLB1DQpK',
                    'screen_name'=>'Agungwy',
                    'user_id'=>'89961966'

                ]
            ]);
        $this->assertEquals(201, $response->status());
    }
    public function test5(){
        $response = $this->call('GET', '/api/requests/all');
        $this->assertEquals(200, $response->status());
    }
    public function test6(){
        $response = $this->call('GET', '/api/requests/sent?user_id=william.hidayat@gmail.com57d2b3bb031944.08580997');
        $this->assertEquals(200, $response->status());
    }
    public function test7(){
        $response = $this->call('GET', '/api/requests/sent?user_id=william.hidayat@gmail.com57d2b3bb031944');
        $this->assertEquals(404, $response->status());
    }
    public function test8(){
        $response=$this->call('PUT','/api/requests/update',[
            [
                "ids"=>"39538010",
                "handle"=>"williamhenry_94"   
            ]
        ]);
    }
    public function test9(){
        $response=$this->call('POST','/api/follow',[
          "handle"=>"williamhenry_94",
          "user_id"=>"william.hidayat@gmail.com57d2b3bb031944.08580997",
          "screen_name"=>"lovehayleyjosh"
        ]);
        $this->assertEquals(201, $response->status());
    }
    public function test11(){
        $response=$this->call('POST','/api/follow',[
          "handle"=>"williamhenry_94",
          "user_id"=>"william.hidayat@gmail.com57d2b3bb031944.08580997",
          "screen_name"=>"lovehayleyjosh"
        ]);
        $this->assertEquals(400, $response->status());
    }
    public function test10(){
        $response=$this->call('POST','/api/unfollow',[
          "handle"=>"williamhenry_94",
          "user_id"=>"william.hidayat@gmail.com57d2b3bb031944.08580997",
          "screen_name"=>"lovehayleyjosh"
        ]);
        $this->assertEquals(200, $response->status());
    }
    public function test12(){
        $response = $this->call('GET', '/api/friends?handle=williamhenry_94&screen_name=williamhenry_94');
        $this->assertEquals(200, $response->status());
    }
    public function test13(){
        $response = $this->call('GET', '/api/followers?handle=williamhenry_94&screen_name=agungwy');
        $this->assertEquals(500, $response->status());
    }
    public function test14(){
        $response = $this->call('GET', '/api/followers?handle=williamhenry_94&screen_name=agungwy&crowdies_id=william.hidayat@gmail.com57d2b3bb031944.08580997');
        $this->assertEquals(200, $response->status());
    }
    public function test15(){
        $response = $this->call('GET', '/api/friends?handle=williamhenry_94');
        $this->assertEquals(500, $response->status());
    }
    public function test16(){
        $response = $this->call('GET', '/api/friends');
        $this->assertEquals(500, $response->status());
    }
    public function test17(){
        $response = $this->call('GET', '/api/followers?handle=williamhenry_94&screen_name=agungwy');
        $this->assertEquals(500, $response->status());
    }
    public function test18(){
        $response = $this->call('GET', '/api/followers?screen_name=agungwy&crowdies_id=william.hidayat@gmail.com57d2b3bb031944.08580997');
        $this->assertEquals(500, $response->status());
    }
    public function test19(){
        $response = $this->call('GET', '/api/followers?handle=williamhenry_94&crowdies_id=william.hidayat@gmail.com57d2b3bb031944.08580997');
        $this->assertEquals(500, $response->status());
    }
    public function test20(){
        $response = $this->call('GET', '/api/followers?crowdies_id=william.hidayat@gmail.com57d2b3bb031944.08580997');
        $this->assertEquals(500, $response->status());
    }
    public function test21(){
        $response = $this->call('GET', '/api/followers?handle=williamhenry_94');
        $this->assertEquals(500, $response->status());
    }
    public function test22(){
        $response = $this->call('GET', '/api/followers?screen_name=williamhenry_94');
        $this->assertEquals(500, $response->status());
    }
    public function test23(){
        $response = $this->call('GET', '/api/followers?crowdies_id=william.hidayat@gmail.com57d2b3bb031944.08580997');
        $this->assertEquals(500, $response->status());
    }
    public function test24(){
        $response=$this->call('POST','/api/register',[
          "name"=>"qwerty",
          "email"=>"abc@xyz.com",
          "password"=>"123456",
          "password_confirmation"=>"123456"
        ]);
        $this->assertEquals(201, $response->status());
    }
    public function test25(){
        $response=$this->call('POST','/api/register',[
          "name"=>"qwerty",
          "email"=>"abc@xyz.com",
          "password"=>"123456",
          "password_confirmation"=>"123456"
        ]);
        $this->assertEquals(400, $response->status());
    }
    public function test26(){
        $response=$this->call('POST','/api/register',[
          "name"=>"qwerty",
          "email"=>"abc@xyz.com",
          "password"=>"123456",
        ]);
        $this->assertEquals(400, $response->status());
    }
    public function test27(){
        $response=$this->call('POST','/api/register',[
          "name"=>"qwerty",
          "password"=>"123456",
          "password_confirmation"=>"123456"
        ]);
        $this->assertEquals(400, $response->status());
    }
    public function test28(){
        $response=$this->call('POST','/api/register',[
          "email"=>"abcd@xyz.com",
          "password"=>"123456",
          "password_confirmation"=>"123456"
        ]);
        $this->assertEquals(400, $response->status());
    }
    public function test29(){
        $response=$this->call('POST','/api/register',[
          "name"=>"qwerty",
          "email"=>"abcd@xyz.com",
          "password"=>"12345",
          "password_confirmation"=>"12345"
        ]);
        $this->assertEquals(400, $response->status());
    }
    public function test30(){
        $response=$this->call('POST','/api/register',[
          "name"=>"qwerty",
          "email"=>"abcd@xyz.com",
          "password_confirmation"=>"123456"
        ]);
        $this->assertEquals(400, $response->status());
    }
    public function test31(){
        $response=$this->call('POST','/api/register',[
          "name"=>"qwerty",
          "email"=>"abc@xyz.com",
          "password"=>"12345",
          "password_confirmation"=>"123456"
        ]);
        $this->assertEquals(400, $response->status());
    }

    public function test32(){
        $response=$this->call('PUT','/api/role',[
          "user_id"=>"abc@xyz.com580b3f08c925a5.45500800",
          "role"=>"crowdies"
        ]);
        $this->assertEquals(201, $response->status());
    }
    public function test33(){
        $response=$this->call('PUT','/api/role',[
          "user_id"=>"abc@xyz.com580b3f08c925a5",
          "role"=>"crowdies"
        ]);
        $this->assertEquals(404, $response->status());
    }
    public function test41(){
        $response=$this->call('PUT','/api/role',[
          "role"=>"crowdies"
        ]);
        $this->assertEquals(500, $response->status());
    }
    public function test42(){
        $response=$this->call('PUT','/api/role',[
          "user_id"=>"abc@xyz.com580b3f08c925a5"
        ]);
        $this->assertEquals(404, $response->status());
    }
    public function test34(){
        $response = $this->call('GET', '/api/twitter?handle=williamhenry_94');
        $this->assertEquals(200, $response->status());
    }
    public function test40(){
        $response = $this->call('GET', '/api/twitter');
        $this->assertEquals(500, $response->status());
    }
    public function test35(){
        $response = $this->call('GET', '/api/user/twitter?handle=williamhenry_94');
        $this->assertEquals(200, $response->status());
    }
    public function test36(){
        $response = $this->call('GET', '/api/user/twitter?handle=wilhenhen');
        $this->assertEquals(404, $response->status());
    }
    public function test37(){
        $response = $this->call('GET', '/api/user/twitter?user_id=bshaffer@gmail.com57d378aa784614.03958496');
        $this->assertEquals(200, $response->status());
    }
    public function test38(){
        $response = $this->call('GET', '/api/user/twitter?user_id=bshaffer@gmail.com57d378aa784614');
        $this->assertEquals(404, $response->status());
    }
    public function test39(){ //failed
        $response = $this->call('GET', '/api/user/twitter');
        $this->assertEquals(400, $response->status());
    }
    public function test43(){
       $response=$this->call('POST','/api/categories',[
          [
              "user_id"=>"bshaffer@gmail.com57d378aa784614.03958496",
              "category_name"=>"Cars"
          ]
        ]);
        $this->assertEquals(201, $response->status());
    }
    public function test44(){
       $response=$this->call('POST','/api/categories',[
          [
              "user_id"=>"bshaffer@gmail.com57d378aa784614.03958496",
              "category_name"=>"xxx"
          ]
        ]);
        $this->assertEquals(500, $response->status());
    }
    public function test45(){
       $response=$this->call('POST','/api/categories',[
          [
              "user_id"=>"bshaffer@gmail.com57d378aa784614",
              "category_name"=>"Cars"
          ]
        ]);
        $this->assertEquals(500, $response->status());
    }
    public function test46(){
       $response=$this->call('POST','/api/categories',[
          [
              "user_id"=>"bshaffer@gmail.com57d378aa784614.03958496",
              "category_name"=>"Cars"
          ]
        ]);
        $this->assertEquals(500, $response->status());
    }
    public function test47(){ 
        $response = $this->call('GET', '/api/recommended?user_id=william.hidayat@gmail.com57d2b3bb031944.08580997');
        $this->assertEquals(200, $response->status());
    }
    public function test48(){ 
        $response = $this->call('GET', '/api/recommended?user_id=william.hidayat@gmail.com57d2b3bb031944');
        $this->assertEquals(404, $response->status());
    }
    public function test49(){ 
        $response = $this->call('GET', '/api/work/show/crowdies?crowdies_id=william.hidayat@gmail.com57d2b3bb031944.08580997');
        $this->assertEquals(200, $response->status());
    }
    public function test50(){ 
        $response = $this->call('GET', '/api/work/show/crowdies?crowdies_id=william.hidayat@gmail.com57d2b3bb031944.');
        $this->assertEquals(404, $response->status());
    }
    public function test51(){
       $response=$this->call('POST','/api/work',[
          
            "crowdies_id"=>"william.hidayat@gmail.com57d2b3bb031944.08580997",
            "companies"=>[
                [
                    "handle"=>"Agungwy"
                ]
            ]
          
        ]);
        $this->assertEquals(201, $response->status());
    }
    public function test52(){
       $response=$this->call('POST','/api/work',[
          
            "crowdies_id"=>"william.hidayat@gmail.com57d2b3bb031944.08580997",
            "companies"=>[
                [
                    "handle"=>"Agungwy"
                ]
            ]
          
        ]);
        $this->assertEquals(403, $response->status());
    }
    public function test54(){
       $response=$this->call('POST','/api/work',[
          
            "crowdies_id"=>"william.hidayat@gmail.com57d2b3bb031944.08580997",
            "companies"=>[
                [
                    "handle"=>"Agung"
                ]
            ]
          
        ]);
        $this->assertEquals(403, $response->status());
    }
    public function test53(){
       $response=$this->call('POST','/api/work',[
          
            "crowdies_id"=>"william.hidayat@gmail.com57d2b3bb031944.",
            "companies"=>[
                [
                    "handle"=>"Agungwy"
                ]
            ]
          
        ]);
        $this->assertEquals(404, $response->status());
    }
    public function test55(){
       $response=$this->call('DELETE','/api/work/delete/bo',[
          
            "crowdies_id"=>"william.hidayat@gmail.com57d2b3bb031944.08580997",
            "handle"=>"Agungwy"
          
        ]);
        $this->assertEquals(201, $response->status());
    }
     public function test56(){
       $response=$this->call('DELETE','/api/work/delete/bo',[
          
            "crowdies_id"=>"william.hidayat@gmail.com57d2b3bb031944.08580997",
            "handle"=>"xxx"
          
        ]);
        $this->assertEquals(404, $response->status());
    }
     public function test57(){
       $response=$this->call('DELETE','/api/work/delete/bo',[
          
            "crowdies_id"=>"william.hidayat@gmail.com57d2b3bb031944.",
            "handle"=>"Agungwy"
          
        ]);
        $this->assertEquals(404, $response->status());
    }

    public function test58(){ 
        $response = $this->call('GET', 'api/work/show/bo?handle=williamhenry_94');
        $this->assertEquals(200, $response->status());
    }
    public function test59(){ 
        $response = $this->call('GET', 'api/work/show/bo?handle=will');
        $this->assertEquals(404, $response->status());
    }
    public function test60(){
       $response=$this->call('DELETE','/api/work/delete/crowdies',[
          
            "crowdies_id"=>"william.hidayat@gmail.com57d2b3bb031944.08580997",
            "handle"=>"Agungwy"
          
        ]);
        $this->assertEquals(201, $response->status());
    }
     public function test61(){
       $response=$this->call('DELETE','/api/work/delete/crowdies',[
          
            "crowdies_id"=>"william.hidayat@gmail.com57d2b3bb031944.08580997",
            "handle"=>"xxx"
          
        ]);
        $this->assertEquals(404, $response->status());
    }
     public function test62(){
       $response=$this->call('DELETE','/api/work/delete/crowdies',[
          
            "crowdies_id"=>"william.hidayat@gmail.com57d2b3bb031944.",
            "handle"=>"Agungwy"
          
        ]);
        $this->assertEquals(404, $response->status());
    }
    public function test63(){ 
        $response = $this->call('GET', 'api/work/at?handle=williamhenry_94&crowdies_id=william.hidayat@gmail.com57d2b3bb031944.08580997');
        $this->assertEquals(200, $response->status());
    }
    public function test64(){ 
        $response = $this->call('GET', 'api/work/at?handle=williamhenry&crowdies_id=william.hidayat@gmail.com57d2b3bb031944.08580997');
        $this->assertEquals(404, $response->status());
    }
    public function test65(){ 
        $response = $this->call('GET', '/api/follow/total_all/williamhenry_94');
        $this->assertEquals(200, $response->status());
    }
    public function test66(){ 
        $response = $this->call('GET', '/api/follow/total_followed/williamhenry_94');
        $this->assertEquals(200, $response->status());
    }
    public function test67(){ 
        $response = $this->call('GET', '/api/follow/crowdie_all/williamhenry_94');
        $this->assertEquals(200, $response->status());
    }
    public function test68(){ 
        $response = $this->call('GET', '/api/follow/crowdie_followed/williamhenry_94');
        $this->assertEquals(200, $response->status());
    }
    public function test69(){ 
        $response = $this->call('GET', '/api/follow/total_all/william.hidayat@gmail.com57d2b3bb031944');
        $this->assertEquals(404, $response->status());
    }
    public function test70(){ 
        $response = $this->call('GET', '/api/follow/total_followed/william.hidayat@gmail.com57d2b3bb031944');
        $this->assertEquals(404, $response->status());
    }
    public function test71(){ 
        $response = $this->call('GET', '/api/follow/crowdie_all/william.hidayat@gmail.com57d2b3bb031944.08580997');
        $this->assertEquals(404, $response->status());
    }
    public function test72(){ 
        $response = $this->call('GET', '/api/follow/crowdie_followed/william.hidayat@gmail.com57d2b3bb031944');
        $this->assertEquals(404, $response->status());
    }
    public function test73(){
       $response=$this->call('POST','/api/classifier',[
          
           "description"=>[
               "We love banana loaf. Come find us the nearest store!"
           ]
          
        ]);
        $this->assertEquals(200, $response->status());
    }
    public function test74(){
       $response=$this->call('POST','/api/classifier',[
          
           "description"=>[
               ""
           ]
          
        ]);
        $this->assertEquals(500, $response->status());
    }
    public function test75(){
       $response=$this->call('POST','/api/classifier',[
          
           "description"=>[
           ]
          
        ]);
        $this->assertEquals(200, $response->status());
    }
    public function test76(){
        $response = $this->call('GET', '/api/user/detail/william.hidayat@gmail.com57d2b3bb031944.08580997');
        $this->assertEquals(200, $response->status());
    }
    public function test77(){
        $response = $this->call('GET', '/api/user/detail/william.hidayat@gmail.com57d2b3bb031944');
        $this->assertEquals(404, $response->status());
    }
    public function test78(){
       $response=$this->call('POST','/api/user/edit',[
          
           "user_id"=>"william.hidayat@gmail.com57d2b3bb031944.08580997",
           "name"=>"william henry hidayat",
           "role"=>"crowdies"
          
        ]);
        $this->assertEquals(201, $response->status());
    }
    public function test79(){
       $response=$this->call('POST','/api/user/edit',[
          
           "user_id"=>"william.hidayat@gmail.com57d2b3bb031944.08580997",
           "role"=>"crowdies"
          
        ]);
        $this->assertEquals(400, $response->status());
    }
    public function test80(){
       $response=$this->call('POST','/api/user/edit',[
          
           "user_id"=>"william.hidayat@gmail.com57d2b3bb031944",
           "name"=>"william henry hidayat",
           "role"=>"crowdies"
          
        ]);
        $this->assertEquals(404, $response->status());
    }
    public function test81(){
       $response=$this->call('POST','/api/user/edit',[
          
           "user_id"=>"william.hidayat@gmail.com57d2b3bb031944.08580997",
           "name"=>"william henry hidayat"
          
        ]);
        $this->assertEquals(400, $response->status());
    }

    public function test82(){
       $response=$this->call('PUT','/api/user/password',[
          
           "user_id"=>"william.hidayat@gmail.com57d2b3bb031944.08580997",
           "password"=>"123456",
           "password_confirmation"=>"123456"
          
        ]);
        $this->assertEquals(201, $response->status());
    }
    public function test83(){
        $response=$this->call('PUT','/api/user/password',[
          
           "user_id"=>"william.hidayat@gmail.com57d2b3bb031944",
           "password"=>"123456",
           "password_confirmation"=>"123456"
          
        ]);
        $this->assertEquals(404, $response->status());
    }
    public function test84(){
        $response=$this->call('PUT','/api/user/password',[
          
           "user_id"=>"william.hidayat@gmail.com57d2b3bb031944.08580997",
           "password"=>"1234567",
           "password_confirmation"=>"123456"
          
        ]);
        $this->assertEquals(400, $response->status());
    }
    
    public function test85(){
       $response=$this->call('PUT','/api/user/password',[
          
           "user_id"=>"william.hidayat@gmail.com57d2b3bb031944.08580997",
           "password"=>"12345",
           "password_confirmation"=>"123456"
          
        ]);
        $this->assertEquals(400, $response->status());
    }
    public function test87(){
       $response=$this->call('PUT','/api/user/password',[
          
           "user_id"=>"william.hidayat@gmail.com57d2b3bb031944.08580997",
           "password_confirmation"=>"123456"
          
        ]);
        $this->assertEquals(400, $response->status());
    }
    public function test88(){
       $response=$this->call('PUT','/api/user/password',[
          
           "user_id"=>"william.hidayat@gmail.com57d2b3bb031944.08580997",
           "password"=>"12345"
          
        ]);
        $this->assertEquals(400, $response->status());
    }
    

}
