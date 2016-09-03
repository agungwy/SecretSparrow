<?php

namespace App;

use OauthPhirehose;
use App\Jobs\ProcessFollowers;
use Illuminate\Foundation\Bus\DispatchesJobs;

class UserStream extends OauthPhirehose
{
    use DispatchesJobs;

    /**
    * Enqueue each status
    *
    * @param string $status
    */
    public function enqueueStatus($status)
    {
        $this->dispatch(new ProcessFollowers($status));
    }
}