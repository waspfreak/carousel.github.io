var EventPing = React.createClass({
    render: function(){
      var eventPing = this.props.eventPing;

    return(
      <div className="ping-container">
        <img src={eventPing} alt="" />
      </div>
    )
    }
});

var SliderItem = React.createClass({
    render: function () {
      var eventTitle = this.props.eventTitle;
      var eventDescription = this.props.eventDescription;
      var eventImg = this.props.eventImg;
      var eventColor = this.props.eventColor;
      var eventBottonStyle = this.props.eventBottonStyle;
      var eventLink = this.props.eventLink;
      var eventBotton = this.props.eventBotton;
      var eventBottonStyle = this.props.eventBottonStyle;
      var eventTerms = this.props.eventTerms;

      return (
        <div>
          <article className="proposition-slider__item">

            <EventPing eventPing={eventPing}/>

            <div className="proposition-slider-img_container" style={eventImg}></div>
            <div className="proposition-slider__info-wrapp" style={eventColor}>
              <div className="info proposition-slider__info">
                <h1 className="hh-xl event-title">{eventTitle}</h1>
                <p className="hh-s event-description">{eventDescription}</p>
                <a className="button-primary event-button" style={eventBottonStyle} href="{eventLink}">{eventBotton}</a>
                <p className="tt-m event-terms">{eventTerms}</p>
              </div>
            </div>
          </article>

        </div>
      );
    }
});


var Slider = React.createClass({

  render: function () {

    return (

      <div>
        <div>
          <article className="proposition-slider">
            <input defaultChecked type="radio" name="slider" id="slide1" className="proposition-slider_input" />
            <input type="radio" name="slider" id="slide2" className="proposition-slider_input" />
            <input type="radio" name="slider" id="slide3" className="proposition-slider_input" />
            {/*<input type="radio" name="slider" id="slide4" className="proposition-slider_input" />*/}
            {/*<input type="radio" name="slider" id="slide5" className="proposition-slider_input" />*/}


            <div  className="proposition-slider__slides">
              <div className="proposition-slider__overflow">
                <div className="inner">


                    <SliderItem eventTitle={eventTitle} eventDescription={eventDescription} eventImg={eventImg} eventImg={eventImg2} eventPing={eventPing}
                    eventColor={eventColor} eventBottonStyle={eventBottonStyle} eventLink={eventLink} eventBotton={eventBotton} eventBottonStyle={eventBottonStyle} eventTerms={eventTerms}/>

                    <SliderItem eventTitle={eventTitle2} eventDescription={eventDescription2} eventImg={eventImg2} eventPing={eventPing2}
                    eventColor={eventColor2} eventBottonStyle={eventBottonStyle2} eventLink={eventLink2} eventBotton={eventBotton2} eventBottonStyle={eventBottonStyle2} eventTerms={eventTerms2}/>

                    <SliderItem eventTitle={eventTitle3} eventDescription={eventDescription3} eventImg={eventImg3}
                    eventColor={eventColor3} eventBottonStyle={eventBottonStyle3} eventLink={eventLink3} eventBotton={eventBotton3} eventBottonStyle={eventBottonStyle3} eventTerms={eventTerms3}/>


                    </div>
                  </div>
                </div>

                <div className="proposition-slider__controls">
                  <label htmlFor="slide1" />
                  <label htmlFor="slide2" />
                  <label htmlFor="slide3" />
                  {/* <label htmlFor="slide4" />*/}
                  {/*<label htmlFor="slide5" /> */}
                </div> {/* #controls */}

                <div className="proposition-slider__active">
                  <label htmlFor="slide1" />
                  <label htmlFor="slide2" />
                  <label htmlFor="slide3" />
                  {/* <label htmlFor="slide4" />*/}
                  {/* <label htmlFor="slide5" />*/}
                </div> {/* #active */}



            </article>
          </div>


      </div>//end Component
    );
  }
});




var eventTitle = "Fresh BBQ meat";
var eventTitle2 = "The match winners";
var eventTitle3 = "Make Mother's Day special";
var eventDescription = "Enjoy a Summer feast with family and friends";
var eventDescription2 = "Snacks, drinks & more to enjoy during the game";
var eventDescription3 = "Gorgeous gifts, meal ideas  more to make ";
var eventBotton = "Shop Now";
var eventBotton2 = "Shop Now";
var eventBotton3 = "Shop Now";
var eventLink = "http://waspfreak.github.io/html/slider/";
var eventLink2 = "http://waspfreak.github.io/html/slider/";
var eventLink3 = "http://waspfreak.github.io/html/slider/";
var eventTerms = "Subject to availability.";
var eventTerms2 = "Subject to availability.";
var eventTerms3 = "Subject to availability.";
var imgUrl = "http://waspfreak.github.io/curso/public/img/GHP-carousel-767x443-mothersday-cake.jpg";
var imgUrl2= "http://waspfreak.github.io/curso/public/img/GHP-carousel-767x443-muller.jpg";
var imgUrl3= "http://waspfreak.github.io/curso/public/img/GHP-carousel-767x443-pizza.jpg";
var eventImg = {backgroundImage: 'url(' + imgUrl + ')' };
var eventImg2 = {backgroundImage: 'url(' + imgUrl2 + ')' };
var eventImg3 = {backgroundImage: 'url(' + imgUrl3 + ')' };
var eventPing = "http://waspfreak.github.io/curso/public/img/ping.png";
var eventPing2 = "http://waspfreak.github.io/curso/public/img/3_for_10pounds_red.png";
var eventPing3 = "http://waspfreak.github.io/curso/public/img/ping.png";
var background = '#eb6b3c';
var textColor = "#fff";
var eventColor = {color: textColor, background: background };
var background2 = '#338717';
var textColor2 = "#fff";
var eventColor2 = {color: textColor2, background: background2 };
var background3 = '#3498BA'
var textColor3 = "#fff";
var eventColor3 = {color: textColor3, background: background3 };
var eventBottonStyle = {background: '#873317'};
var eventBottonStyle2 = {background: '#1F4D0F'};
var eventBottonStyle3 = {background: '#134454'};
var eventTerms = "Subject to availability 1";
var eventTerms2 = "Subject to availability 1";
var eventTerms3 = "Subject to availability 3";


ReactDOM.render(
  <Slider />,
  document.getElementById('app')
);
