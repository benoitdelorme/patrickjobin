<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Sites
    |--------------------------------------------------------------------------
    |
    | Each site should have root URL that is either relative or absolute. Sites
    | are typically used for localization (eg. English/French) but may also
    | be used for related content (eg. different franchise locations).
    |
    */

    'sites' => [

        'fr' => [
            'name' => 'FR',
            'locale' => 'fr_CA',
            'url' => config('app.url').'/',
        ],

        'en' => [
            'name' => 'EN',
            'locale' => 'en_US',
            'url' => config('app.url').'/en',
        ],

    ],
];
