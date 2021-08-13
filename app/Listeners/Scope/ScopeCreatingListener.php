<?php

namespace App\Listeners\Scope;

use App\Events\BaseEvent;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Prettus\Repository\Events\RepositoryEventBase;

class ScopeCreatingListener
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
     * @param  object  $event
     * @return void
     */
    public function handle(RepositoryEventBase $event)
    {
        event(new BaseEvent('Scope creating'));
    }
}
