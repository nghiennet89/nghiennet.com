<?php

namespace App\Listeners;

use Illuminate\Support\Facades\Log;
use Prettus\Repository\Events\RepositoryEntityUpdating;

class EntityUpdatingListener
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
     *
     * Handle the event.
     *
     * @param RepositoryEntityUpdating $event
     */
    public function handle(RepositoryEntityUpdating $event)
    {
        $repository = $event->getRepository();
        $modelName = basename($repository->model());
        $listenerPath = __NAMESPACE__ . '\\' . $modelName . '\\' . $modelName . 'UpdatingListener';
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
