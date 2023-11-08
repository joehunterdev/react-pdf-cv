<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');
header("Access-Control-Allow-Headers: X-Requested-With");
header('Content-Type: application/json;  charset=utf-8');
use Symfony\Component\HttpClient\HttpClient;
use Symfony\Component\DomCrawler\Crawler;


include_once 'functions.php';
error_reporting(0);

require_once __DIR__ . '/../vendor/autoload.php';

$client = HttpClient::create();

switch ($_GET['lang']) {
    case 'en':
        $response = file_get_contents('yoururl');

        break;
    case 'es':
        $response = file_get_contents_utf8('yoururl');
        break;
    default:
        $response = file_get_contents('yoururl');

        break;
}

$crawler = new Crawler($response);

$aboutParagraph = $crawler->filter('#about .col-lg-8 p')->eq(0)->text();

$telElement = $crawler->filter('[data-id="tel"]')->html();
$emailElement = $crawler->filter('[data-id="email"]')->html();
$addressElement = $crawler->filter('[data-id="address"]')->text();
$contactDetails = ["tel" => $telElement, "email" => $emailElement, "address" => $addressElement];


$experiences = [];
$crawler->filter('#experience div.card')->each(function (Crawler $card) use (&$experiences) {
    $experience = [];
    $experience['period'] = $card->filter('small')->text();
    $experience['title'] = $card->filter('h2')->text();
    $experience['company'] = $card->filter('h3')->text();
    $experience['description'] = $card->filter('p')->text();
    $experience['summary'] = [
        'design' => [],
        'solutions' => [],
        'management' => []
    ];
    $card->filter('ul')->each(function (Crawler $list, $index) use (&$experience) {
        $list->filter('li')->each(function (Crawler $item) use (&$experience, $index) {
            $experience['summary'][$index === 0 ? 'design' : ($index === 1 ? 'solutions' : 'management')][] = $item->text();
        });
    });
    $experiences[] = $experience;
});

$educations = [];
$crawler->filter('#education .card-flex .col-lg-4')->each(function (Crawler $card) use (&$educations) {
    $education = [];
    $education['period'] = $card->filter('[data-id="period"]')->text();
    $education['titled'] = trim($card->filter('[data-id="titled"]')->text(), ':');
    $education['awarded'] = $card->filter('li')->each(function (Crawler $item) {
        return $item->text();
    });
    $educations[] = $education;
});

$certificates = [];
$crawler->filter('[data-id="certifacation"]')->each(function (Crawler $card) use (&$certificates) {
    $certificate = [];
    $certificate['urls'] = $card->filter('img')->each(function (Crawler $img) {
        return $img->attr('src');
    });
    $certificates[] = $certificate;
});

$output = [
    'about' => $aboutParagraph,
    'contactDetails' => $contactDetails,
    'experiences' => $experiences,
    'education' => $educations,
    'certificates' => $certificates

];

echo Utf8_ansi(json_encode($output));
