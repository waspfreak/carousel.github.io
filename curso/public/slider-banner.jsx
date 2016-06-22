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


    return(
      <div>
      <section className="slider">
          <div className="slider-slide">
            <div className="ping-container">
              <img src={eventPing} alt="" />
            </div>

            <div className="slider-stamp" style={eventImg}></div>

            <div className="slider-wrapp bg-easter">
              <div className="slider-content " style={eventColor}>
                <h2 className="hh-xl event-title">{eventTitle}</h2>
                <p className="hh-s event-description">{eventDescription}</p>
                <a className="button-primary event-button" href={eventLink}>{eventBotton}</a>
                <p className="tt-m event-terms">{eventTerms}</p>
              </div>
            </div>

          </div>

      </section>
    </div>
    );

  }
});

var eventTitle = "Make Mother's Day special fertgfdhert"
var eventDescription = "Do chartreuse 3 wolf moon, man bun drinking vinegar tilde laboris quis kickstarter"
var eventBotton = "Shop Now"
var eventLink = "http://waspfreak.github.io/html/slider/"
var eventTerms = "Subject to availability."
var imgUrl = "http://waspfreak.github.io/img/event-bg.jpg"
var eventImg = {backgroundImage: 'url(' + imgUrl + ')' };
var eventPing = "/img/ping.png";
var background = "#cdeded";
var textColor = "#2b807e"
var eventColor = {color: textColor, background: background }


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
  />,
  document.getElementById('app')
);
