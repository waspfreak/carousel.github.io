var Slider = React.createClass({

  render: function(){

    var eventTitle = this.props.eventTitle;
    var eventDescription = this.props.eventDescription;
    var eventBotton = this.props.eventBotton;
    var eventTerms = this.props.eventTerms;
    var eventLink = this.props.eventLink;
    var eventImg = this.props.eventImg;
    var eventPing = this.props.eventPing;
    var eventColor = this.props.eventColor;
    var eventBottonStyle = this.props.eventBottonStyle;


    return(
      <article className="proposition-slider">
        <div  className="proposition-slider__slides">
          <div className="proposition-slider__overflow">
            <div className="inner">

                    <div className="ping-container">
                      <img src={eventPing} alt="" />
                    </div>


                    <article className="proposition-slider__item">
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
              </div>
            </div>
        </article>
    );

  }
});

var eventTitle = "Fresh BBQ meat";
var eventDescription = "Enjoy a Summer feast with family and friends";
var eventBotton = "Shop Now";
var eventLink = "http://waspfreak.github.io/html/slider/";
var eventTerms = "Subject to availability.";
var imgUrl = "http://waspfreak.github.io/curso/public/img/BBQ-stamp-s.jpg";
var eventImg = {backgroundImage: 'url(' + imgUrl + ')' };
var eventPing = "http://waspfreak.github.io/curso/public/img/ping.png";
var background = "#eb6b3c;";
var textColor = "#fff";
var eventColor = {color: textColor, background: background };
var eventBottonStyle = {background: '#691c00'}


ReactDOM.render(
  <Slider
    eventTitle={eventTitle}
    eventDescription={eventDescription}
    eventBotton={eventBotton}
    eventTerms={eventTerms}
    eventBotton={eventBotton}
    eventLink={eventLink}
    eventImg={eventImg}
    eventPing={eventPing}
    eventColor={eventColor}
    eventBottonStyle={eventBottonStyle}
  />,
  document.getElementById('app')
);
