function popupFunction() {
    var popup = document.getElementById("myInfoPopup");
    popup.classList.toggle("show");
}

<div class="info-popup">
          <span class="popuptext" id="myInfoPopup"><p>Clicking on any segment of a chart will change the data in all charts to be relevent to the segment that you clicked.</p><p>For example, if you click the "UK" segment in the main pie chart in the sidebar, all other charts will only show data pertinent to my time in the UK.</p><p>Click the same segment again to deselect that data subset, or click additional segments (on the same or other charts) to filter the data further.</p><p class="close-popup"  onclick="popupFunction()">Close</p></span>
        </div>