import "../styles/home.css";
import Vector from "../assets/Vector.png";
import TextSlider from "../instruments/TextSlider";
import ScrollToSection from "../components/ScrollToSection";
import ProductsShowcase from "../components/ProductsShowcase";
import products from "../Products/products";
import Frame1 from "../assets/Frame1.png";
import Frame2 from "../assets/Frame2.png";
import Frame3 from "../assets/Frame3.png";
import PhotoSliderHome from "../instruments/PhotoSliderHome";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <TextSlider interval={5000} />

      <ScrollToSection targetId="open_shop_in_home">
        <div className="button_menu_home">
          <div className="vector">
            {" "}
            <img src={Vector} />{" "}
          </div>
          <div className="button_in_shop">Открыть магазин</div>
        </div>
      </ScrollToSection>

      <div className="main_home">
        <h1 className="text-[40px] leading-none p-0 m-0">Новая коллекция</h1>
        <div className=" pt-[92px] ">
          <ProductsShowcase ids={[1, 6, 5]} data={products} />
        </div>
        <div className="flex justify-center pt-[65px]">
          {" "}
          
          <Link
            id="open_shop_in_home"
            to="/shop"
            className="inline-flex items-center justify-center w-[243px] h-[68px] 
             border border-[#6E9C9F] text-[#6E9C9F] text-[17px]
             transition-colors duration-300
             hover:bg-[#6E9C9F] hover:text-white"
          >
            Открыть магазин
          </Link>
        </div>

        <div className="important_to_us">
          <h2 className="text-[40px] leading-none p-0 mt-[130px]">
            Что для нас важно
          </h2>
          <div className="flex gap-[30px] mt-[92px]">
            <div className="important_item">
              <img src={Frame1} className="w-[61px] h-[61px]" />
              <h3 className="text-[25px] mt-[37px]">Качество</h3>
              <p className="text-[17px] mt-[24px] w-[305px]">
                Наши профессионалы работают на лучшем оборудовании для пошива
                одежды беспрецедентного <br />
                качества
              </p>
            </div>

            <div className="important_item">
              <img src={Frame2} className="w-[61px] h-[61px]" />
              <h3 className="text-[25px] mt-[37px]">Скорость</h3>
              <p className="text-[17px] mt-[24px] w-[305px]">
                Благодаря отлаженной системе в Womazing мы можем отшивать до
                20-ти единиц продукции в наших собственных цехах
              </p>
            </div>

            <div className="important_item">
              <img src={Frame3} className="w-[61px] h-[61px]" />
              <h3 className="text-[25px] mt-[37px]">Ответственность</h3>
              <p className="text-[17px] mt-[24px] w-[305px]">
                Мы заботимся о людях и планете. Безотходное производство и
                комфортные условия труда - все это Womazing
              </p>
            </div>
          </div>
        </div>

        <div className="dream_team_home ">
          <h2 className="text-[40px] leading-none p-0 mt-[130px] mb-[92px]">
            Команда мечты Womazing
          </h2>
          <div className="dream_sliderAndText flex">
            <PhotoSliderHome />
            <div className="dream_text_home flex flex-col gap-[28px] w-[255px] h-[331px] mt-[78px] ml-[124px]">
              <h4 className="text-[25px]">Для каждой</h4>
              <p className="text-[17px]">
                Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.
              </p>
              <p className="text-[17px]">
                Womazing ищет эти мелочи и создает прекрасные вещи, которые
                выгодно подчеркивают достоинства каждой девушки.
              </p>
              <Link to="/about">
                <p className="text-[17px] text-[#6E9C9F] hover:underline cursor-pointer">
                  Подробнее о бренде
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="top_border_home">
        <div className="banner_top"></div>
        <img src="/images/first.png" className="firstImage_home" />
        <img src="/images/second.png" className="secondImage_home" />
        <img src="/images/third.png" className="thirdImage_home" />
      </div>
    </div>
  );
}
