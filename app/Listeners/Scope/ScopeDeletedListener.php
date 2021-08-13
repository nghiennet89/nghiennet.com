<?php

namespace App\Listeners\Scope;

use App\Events\BaseEvent;
use Prettus\Repository\Events\RepositoryEventBase;

class ScopeDeletedListener
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
     * @param object $event
     *
     * @return void
     */
    public function handle(RepositoryEventBase $event)
    {
        event(new BaseEvent('Scope deleted'));
    }
}
