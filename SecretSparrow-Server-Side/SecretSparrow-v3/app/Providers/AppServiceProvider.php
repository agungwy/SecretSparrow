<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Phirehose;
use App\UserStream;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
         $this->app->bind('App\UserStream', function ($app) {
            $twitter_access_token = "83309209-8FEr7Etkmy8h0DDDHvG9rJbUtUvYFSvNvjajwHq7M";
            $twitter_access_token_secret = "gUQFmL51RcNE9iXM59epWT1jGirAveIdhsSSs5G0nlG7G";
            return new UserStream($twitter_access_token, $twitter_access_token_secret, Phirehose::METHOD_FILTER);
        });
    }
}
