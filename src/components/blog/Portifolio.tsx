// import Caderno from "src/img/imgBlog/caderno.jpeg";
// import Cerejeira from "../../img/laranjeira.png";

// import "bootstrap/dist/css/bootstrap.min.css";
import AppTS from "../slider/Slider";
import AppTSD from "../slider/Sliderdois";
import { BlogG, FotoA } from "./Portifolio.style";

function Portifolio() {
  return (
    <>
      <BlogG>
        <div className="fotoAB">
        <FotoA> <AppTSD /></FotoA>
        </div>
        <div>
        <h3>titulo do artigo</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta eos a
          nostrum eius amet numquam iure quas magnam nobis ea laborum adipisci
          odio possimus eligendi distinctio temporibus perferendis laboriosam
          fuga, fugit perspiciatis necessitatibus enim. Laborum itaque quas
          impedit quos alias officiis dolorem eos assumenda facere vero numquam
          quibusdam debitis necessitatibus sunt animi corporis ab quidem, vitae
          veritatis fuga. Sint ut commodi ab, natus exercitationem qui porro
          ducimus culpa eaque, in consequatur voluptates aliquid fugiat iure.
          Ipsa, impedit. Ipsam facilis adipisci qui obcaecati minima doloremque
          corporis veniam ipsa laudantium, animi commodi odit aliquam modi quae
          excepturi voluptatum, accusantium, itaque vero molestiae.
        </p>
        <p>escrito por<strong> Daiany Noronha </strong><br /> data <strong>00/00/2023</strong></p>
        </div>
      </BlogG>

      <BlogG>
        <div className="fotoAB">
        <FotoA> <AppTS /></FotoA>
        </div>
        <div>
        <h3>titulo do artigo  2</h3>
        <p>
          2222Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta eos a
          nostrum eius amet numquam iure quas magnam nobis ea laborum adipisci
          odio possimus eligendi distinctio temporibus perferendis laboriosam
          fuga, fugit perspiciatis necessitatibus enim. Laborum itaque quas
          impedit quos alias officiis dolorem eos assumenda facere vero numquam
          quibusdam debitis necessitatibus sunt animi corporis ab quidem, vitae
          veritatis fuga. Sint ut commodi ab, natus exercitationem qui porro
          ducimus culpa eaque, in consequatur voluptates aliquid fugiat iure.
          Ipsa, impedit. Ipsam facilis adipisci qui obcaecati minima doloremque
          corporis veniam ipsa laudantium, animi commodi odit aliquam modi quae
          excepturi voluptatum, accusantium, itaque vero molestiae.
        </p>
        <p>escrito por<strong> Daiany Noronha </strong><br /> data <strong>00/00/2023</strong></p>
        </div>
      </BlogG>
    </>
  );
}

export default Portifolio;
