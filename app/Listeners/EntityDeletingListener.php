<?php

namespace App\Listeners;

use Illuminate\Support\Facades\Log;
use Prettus\Repository\Events\RepositoryEntityDeleting;

class EntityDeletingListener
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
     * @param RepositoryEntityDeleting $event
     *
     * @return void
     */
    public function handle(RepositoryEntityDeleting $event)
    {
        $repository = $event->getRepository();
        $modelName = basename($repository->model());
        $listenerPath = __NAMESPACE__ . '\\' . $modelName . '\\' . $modelName . 'DeletingListener';
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
