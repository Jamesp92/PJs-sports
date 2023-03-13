import UpComingEvents from "../components/UpcomingFights";
import UpComingPeacockEvents from "../components/UpComingPeacockEvents";

function Events() {
  return (
    <>
  <div class="columns">
      <div class="column"><UpComingPeacockEvents/></div>
          <div class="column">
            <UpComingEvents />
          </div>
        </div>     
    </>
  )}
export default Events;