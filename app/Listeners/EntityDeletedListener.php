<?php

namespace App\Listeners;

use Illuminate\Support\Facades\Log;
use Prettus\Repository\Events\RepositoryEntityDeleted;

class EntityDeletedListener
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param RepositoryEntityDeleted $event
     *
     * @return void
     */
    public function handle(RepositoryEntityDeleted $event)
    {
        $repository = $event->getRepository();
        $modelName = basename($repository->model());
        $listenerPath = __NAMESPACE__ . '\\' . $modelName . '\\' . $modelName . 'DeletedListener';
        if (!class_exists($listenerPath)) return;
        try {
            $listener = new $listenerPath;
            $listener->handle($event);
        } catch (\Exception $e) {
            Log::info('Event Listener ' . $listenerPath . ' run fail');
            Log::info($e->getMessage());
        }
    }
}
