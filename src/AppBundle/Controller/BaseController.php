<?php
// src/AppBundle/Controller/LuckyController.php
namespace AppBundle\Controller;

use AppBundle\Entity\Blog\Music;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use  Symfony\Component\HttpFoundation\Response;

class BaseController extends Controller
{


    public function __construct()
    {

    }

    public function indexAction(Request $request)
    {
        return $this->render('base/index.html.twig');
    }

    public function paginateAction()
    {
        return $this->render('base/paginate.html.twig');
    }

    public function addAction($name = "Название произведения", $author = "Автор", $genre = "classic", $year = 2015)
    {
        $product = new Music();
        $product->setName($name);
        $product->setAuthor($author);
        $product->setGenre($genre);
        $product->setYear($year);
        $em = $this->getDoctrine()->getManager();
        $em->persist($product);
        $em->flush();
        return new Response('<html><body>' . $author . ' <br /><h2> ' . $name . '</h2></body></html>');
    }

    public function jsonAction()
    {
        $repository = $this->getDoctrine()
            ->getRepository('AppBundle:Blog\Music');
        $all = $repository->findAll();
        $arr = [];
        foreach ($all as $key=>$one) {
            $arr[$key]['id']=$one->getId();
            $arr[$key]['name']=$one->getName();
            $arr[$key]['author']=$one->getAuthor();
            $arr[$key]['genre']=$one->getGenre();
            $arr[$key]['year']=$one->getYear();
        }
        return
            $this->json($arr,200,
                array('Content-Type' => 'application/json'));

    }
}