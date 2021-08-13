<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Cache;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function index(Request $request)
    {
        //TODO : Need detect google bot user agent for run SSR
        $userAgent = $request->server('HTTP_USER_AGENT');
        if (!env('SSR_ENABLE') || $userAgent == 'SSR-SERVER') return view('index');
        $uri = $request->getRequestUri();
        $url = env('SSR_SERVER') . ':' . env('SSR_PORT') . $uri;
        $cached = Cache::get(md5($url));
        if ($cached) return $cached;
        try {
            $client = new Client();
            $res = $client->get($url);
            $content = $res->getBody()->getContents();
            Cache::put(md5($url), $content, now()->addSeconds(env('SSR_CACHE_TIME')));
            return $content;
        } catch (\Exception $e) {
            return view('index');
        }
    }

    public function admin()
    {
        $personalAccessToken = session()->get('personalAccessToken');
        return view('admin', compact('personalAccessToken'));
    }
}
