<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class DatabaseBackUp extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'database:backup';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $today = date("Y-m-d");

        $filename = "backup-" . $today . ".gz";

        if (!file_exists(storage_path("app/backup/"))) mkdir(storage_path("app/backup/"));
        $exportPath = storage_path("app/backup/") . $filename;
        $command = "mysqldump --user=" . env('DB_USERNAME') . ' --password="' . env('DB_PASSWORD') . '" --host=' . env('DB_HOST') . " " . env('DB_DATABASE') . "  | gzip > " . $exportPath;
        $returnVar = null;
        $output = null;
        try {
            exec($command, $output, $returnVar);
            echo $output;
            echo $returnVar;
            if ($returnVar == 0) {
                //delete old file
                $last7Days = date("Y-m-d", strtotime("$today -7 day"));
                $fileLast7Day = storage_path("app/backup/") . $last7Days . ".gz";
                if (file_exists($fileLast7Day)) unlink($fileLast7Day);
            }
        } catch (\Exception $e) {
            print_r($e);
        }
    }
}
