<?php

namespace App\Providers;

use App\Listeners\EntityCreatedListener;
use App\Listeners\EntityCreatingListener;
use App\Listeners\EntityDeletedListener;
use App\Listeners\EntityDeletingListener;
use App\Listeners\EntityUpdatedListener;
use App\Listeners\EntityUpdatingListener;
use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Prettus\Repository\Events\RepositoryEntityCreated;
use Prettus\Repository\Events\RepositoryEntityCreating;
use Prettus\Repository\Events\RepositoryEntityDeleted;
use Prettus\Repository\Events\RepositoryEntityDeleting;
use Prettus\Repository\Events\RepositoryEntityUpdated;
use Prettus\Repository\Events\RepositoryEntityUpdating;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        Registered::class               => [
            SendEmailVerificationNotification::class,
        ],
        RepositoryEntityCreated::class  => [
            EntityCreatedListener::class,
        ],
        RepositoryEntityCreating::class => [
            EntityCreatingListener::class,
        ],
        RepositoryEntityDeleted::class  => [
            EntityDeletedListener::class,
        ],
        RepositoryEntityDeleting::class => [
            EntityDeletingListener::class,
        ],
        RepositoryEntityUpdated::class  => [
            EntityUpdatedListener::class,
        ],
        RepositoryEntityUpdating::class => [
            EntityUpdatingListener::class,
        ],
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
