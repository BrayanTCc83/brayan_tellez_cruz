import ContentContainer from '../components/contentContainer';
import Reel from '../components/reel';

const urls = [
    {src:'https://www.collinsdictionary.com/images/full/cat_156310937.jpg', data:'This is an image'},
    {src:'https://cdn.pixabay.com/photo/2020/03/23/08/45/cat-4959941__480.jpg', data:''},
    {src:'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg', data:''},
    {src:'https://ichef.bbci.co.uk/news/640/cpsprodpb/150EA/production/_107005268_gettyimages-611696954.jpg', data:''},
    {src:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg', data:''},
    {src:'https://www.fundacion-affinity.org/sites/default/files/los-10-sonidos-principales-del-perro.jpg', data:''},
    {src:'https://as01.epimg.net/diarioas/imagenes/2022/05/29/actualidad/1653826510_995351_1653826595_noticia_normal_recorte1.jpg', data:''},
    {src:'https://ichef.bbci.co.uk/news/640/cpsprodpb/15665/production/_107435678_perro1.jpg', data:''}
]

const ProjectView = () : JSX.Element => {
    return (
        <ContentContainer height='600px' >
            <Reel contents={urls}/>
        </ContentContainer>
    )
};

export default ProjectView;