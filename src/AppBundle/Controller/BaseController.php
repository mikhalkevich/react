<?php
// src/AppBundle/Controller/LuckyController.php
namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use  Symfony\Component\HttpFoundation\Response;

class BaseController extends Controller
{
    /**
     * @Route("/lucky/number")
     */
    public function indexAction(Request $request)
    {
        return $this->render('base/index.html.twig', [
            'base' => 'baba',
        ]);
    }

    public function paginateAction()
    {
        return $this->render('base/paginate.html.twig');
    }

    public function jsonAction()
    {
        $json = "[
        {
        id:1,
        name:Alex
        },
        {
        id:2,
        name:Jhon
        }
        ]";
        return new Response(
            $this->json($json),
            200,
            array('Content-Type'=>'application/json')
            );
    }
}