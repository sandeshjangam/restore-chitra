<?php

namespace App\Console\Commands;

use App\Models\UserUsage;
use Illuminate\Console\Command;

class UserResetUsage extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'user:reset-usage';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Reset daily usage of user';

    /**
     * Execute the console command.
     *
     * @return void
     */
    public function handle()
    {
        UserUsage::whereCode('image')->update(['used' => 0]);
        $this->info('Usages have been reset.');
    }
}
