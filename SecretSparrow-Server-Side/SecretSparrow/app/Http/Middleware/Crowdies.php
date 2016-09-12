<?php

namespace App\Http\Middleware;

use Closure;
use OAuth2\HttpFoundationBridge\Request;
use OAuth2\HttpFoundationBridge\Response;
use App;
class Crowdies
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
//        return $next($request);
        $bridgedRequest  = Request::createFromRequest($request);
        $bridgedResponse = new Response();
        $scopeRequired='crowdies';
        if (App::make('oauth2')->verifyResourceRequest($bridgedRequest, $bridgedResponse,$scopeRequired)) {
      
            return $next($request);
        }
        else {
            return response()->json(array(
                'error' => 'Unauthorized'
            ), $bridgedResponse->getStatusCode());
        }
    }
}
