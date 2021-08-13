<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

# LAravel + vueTIFY
- Demo: http://nghiennet.com
- Admin: http://nghiennet.com/admin
# Deploy commands

*PHP8*

- composer install
- Edit config in .env.production
- cp .env.production .env
- Edit config in .env

- cp ./storage/oauth-private.key.dev ./storage/oauth-private.key
- cp ./storage/oauth-public.key.dev ./storage/oauth-public.key
- php artisan migrate
- php artisan db:seed
- php artisan command:migrate-scopes

*Node Version: 16.3+*

- npm install
- npm run build
- npm run watch

## to override default keys

- php artisan key:generate
- php artisan passport:keys
- If need override current passport client:
    - open mysql, truncate table oauth_clients
    - run command: php artisan passport:install

## Sample for auto init front-end, backend of entity "Post"

- php artisan make:entity post
    - No
    - yes
    - No
- php artisan command:init-entity post
- php artisan command:migrate-scopes

## webpack config on intellij idea:

- Settings | Languages & Frameworks | JavaScript | Webpack
- change path of webpack to node_modules/@vue/cli-service/webpack.config.js
