<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\UserStream;

class ConnectToStreamingAPI extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'connect_to_streaming_api';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Connect to the Twitter Streaming API';
    protected $userStream;
    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct(UserStream $userStream)
    {
        $this->userStream = $userStream;
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        //
        $twitter_consumer_key = env('TWITTER_CLIENT_ID');
        $twitter_consumer_secret = env('TWITTER_CLIENT_SECRET');

        $this->userStream->consumerKey = $twitter_consumer_key;
        $this->userStream->consumerSecret = $twitter_consumer_secret;
        $this->userStream->setTrack(array('auspol'));
        $this->userStream->consume();
    }
}
