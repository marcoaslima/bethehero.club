<?php

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

use App\IncidentController;

require 'vendor/autoload.php';

$app = new \Slim\App();

$IncidentController = new IncidentController;

$app->post('/sessions', function (Request $request, Response $response) {});
$app->get('/ngos', function (Request $request, Response $response) {});
$app->post('/ngos', function (Request $request, Response $response) {});

$app->post('/incidents', function (Request $request, Response $response) {});
$app->get('/incidents', function (Request $request, Response $response) {});
$app->delete('/incidents/{id}', function (Request $request, Response $response) {});

$app->get('/profile', function (Request $request, Response $response) {});

$app->run();