function incidentsCheck(){
    var incident_detail = document.getElementById('incident-detail');
    var incident_yes = document.getElementById('incident-yes');
    var incident_no = document.getElementById('incident-no');

    if(incident_yes.checked){
        incident_detail.setAttribute("style", "display: block;");
        return true;
    }else if(incident_no.checked){
        incident_detail.setAttribute("style", "display: none;");
        return false;
    }
}

function financierInterest(){
    var financier_name = document.getElementById('financier-name');
    var financier_yes = document.getElementById('financier-yes');
    var financier_no = document.getElementById('financier-no');

    if(financier_yes.checked){
        financier_name.setAttribute("style", "display: block;");
        return true;
    }else if(financier_no.checked){
        financier_name.setAttribute("style", "display: none;");
        return false;
    }
}

function scopeOfCover(){
    var scope_of_cover = document.getElementById('scope-of-cover').value;
    var vehicle_value = document.getElementById('vehicle-value');
    var windscreen_value = document.getElementById('windscreen-value');
    var sound_value = document.getElementById('sound-value');

    if(scope_of_cover == 'Comprehensive'){
        vehicle_value.setAttribute("style", "display: block;");
        windscreen_value.setAttribute("style", "display: block;");
        sound_value.setAttribute("style", "display: block;");
        return true;
    }
    else{
        vehicle_value.setAttribute("style", "display: none;");
        windscreen_value.setAttribute("style", "display: none;");
        sound_value.setAttribute("style", "display: none;");
        return false;
    }
}
