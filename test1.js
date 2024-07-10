var elementIsClicked = false
$('#q').bind("keyup", function(e){
    var baseURL = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '');
    if (elementIsClicked && e.keyCode == 8) {
        $('#q').val('')
        $(this).val('')
        $('#selction-ajax').hide();
        if ($("#q").css("backgroundImage")){
            $("#q").css("backgroundImage","none");
            $('#q').removeClass("bg")
            $('.apos-search-tool input.apos-tool').css("padding","0px 20px")

        }
    } else if ($(this).val().length > 1 && e.keyCode != 13){
        window.showLoadingEnabled = false;
        // debugger;
        $.ajax({
            url: baseURL+"/condition-search?query=" + $(this).val()+ "&type=solutionsubpage",
            type: "GET",
            contentType:'application/json',
            dataType: 'json',
            success: function (data) {
                    var data = data['data'];
                    if (data.length > 0) {
                        elementIsClicked = false;
                        $('.hint-tab').remove();
                        $.each(data, function (index, element) {
                                if (data[index]['conditionId']){
                                    element["id"] = data[index]['conditionId']
                                }
                                if (element["name"] !== "Admin_condition"){
                                var div_tag = '<div class="row hint-tab ajax_condition_data" onclick="get_condition_data(this)" id="' + element["id"] + '" value="' + element["name"] + '"><div class="col-md-2 hint-img">';
                                var html_tag = div_tag + '</div><div class="col-md-12 hint-title"><p id="' + element["id"] + '" value="' + element["name"] + '">' + element["name"] + '</p> </div></div>';
                                $('#selction-ajax').append(html_tag);
                                $('#selction-ajax').show();}
                        });
                    } else {
                        $('#selction-ajax').hide();
                    }
                }
        });
    } else {
        $('#selction-ajax').hide();
    }
})
// For General Search ajax 

var generalelementIsClicked = false;
$('#general').bind("keyup", function(e){
    var baseURL = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '');
    if (generalelementIsClicked && e.keyCode == 8) {
        $('#general').val('')
        $(this).val('')
        $('#general-selction-ajax').hide();
        if ($("#general").css("backgroundImage")){
            $("#general").css("backgroundImage","none");
            $('#general').removeClass("bg")
            $('.apos-search-tool input.apos-tool').css("padding","0px 20px")

        }

    } else if ($(this).val().length > 1){
        window.showLoadingEnabled = false;
        $.ajax({
            url: baseURL+"/condition-search?query=" + $(this).val() + "&type=general",
            type: "GET",
            contentType:'application/json',
            dataType: 'json',
            success: function (data) {
                    var data = data['data'];
                    console.log(data)
                    if (data.length > 0) {
                        generalelementIsClicked = false;
                        $('.hint-tab').remove();
                        $.each(data, function (index, element) {
                            console.log(data[index]);
                            if (data[index]['conditionId']){
                                element["id"] = data[index]['conditionId']
                            }
                            var div_tag = '<div class="row hint-tab ajax_condition_data" onclick="get_condition_data(this)" id="' + element["id"] + '" value="' + element["name"] + '"><div class="col-md-2 hint-img">';
                            if (element["image"]) {
                                var img_tag = '<img id="' + element["id"] +'" src="' + element["image"] + '"  alt="Find Solution">';
                            } else {
                                
                                var img_tag = '<img id="' + element["id"] +'" src="/static/blog_frontend/image/search-icon-img.jpg"  alt="Find Solution">';
                            }
                            var html_tag = div_tag + img_tag + '</div><div class="col-md-10 hint-title"><p id="' + element["id"] + '" value="' + element["name"] + '">' + element["name"] + '</p> </div></div>';
                            $('#general-selction-ajax').append(html_tag);
                            $('#general-selction-ajax').show();
                        });
                    } else {
                        $('#general-selction-ajax').hide();
                    }
                }
        });
    } else {
        $('#general-selction-ajax').hide();
    }
}) 


//topicsearch 
$(document).click(function(){
    $("#selction-ajax, #lib_condition-selction-ajax, #lib_condition-selction-ajax, #lib_sol_con-selction-ajax, #conditionhomeremedies-selction-ajax, #conditionprevention-selction-ajax, #lib_conditionprevention-selction-ajax, #lib_conditionhomeremedies-selction-ajax, #debatabletopic-selction-ajax, #healing-selction-ajax, #lib_condition-selction-ajax, #lib_sol_subsol-selction-ajax, #lib_science_opinion-selction-ajax, #sol_subsol_science_opinion-selction-ajax, #condition-selction-ajax, #solutionsubsolution-selction-ajax, #con_sol_subsol-selction-ajax").hide();
    if($("#q").val()){
        $("#q").val('');
        $('#q').attr('style', '');
    }
});

var topicelementIsClicked = false;
$('#topicsearch').bind("keyup", function(e){
    var baseURL = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '');
    if (generalelementIsClicked && e.keyCode == 8) {
        $('#general').val('')
        $(this).val('')
        $('#topicsearch-selction-ajax').hide();
        if ($("#topicsearch").css("backgroundImage")){
            $("#topicsearch").css("backgroundImage","none");
            $('#topicsearch').removeClass("bg")
            $('.apos-search-tool input.apos-tool').css("padding","0px 20px")

        }

    } else if ($(this).val().length > 1){
        window.showLoadingEnabled = false;
        $.ajax({
            url: baseURL+"/condition-search?query=" + $(this).val() + "&type=general",
            type: "GET",
            contentType:'application/json',
            dataType: 'json',
            success: function (data) {
                    var data = data['data'];
                    console.log(data)
                    if (data.length > 0) {
                        topicelementIsClicked = false;
                        $('.hint-tab').remove();
                        $.each(data, function (index, element) {
                            console.log(data[index]);
                            if (data[index]['conditionId']){
                                element["id"] = data[index]['conditionId']
                            }
                            var div_tag = '<div class="row hint-tab ajax_condition_data" onclick="get_topicsearch_data(this)" id="' + element["id"] + '" value="' + element["name"] + '"><div class="col-md-2 hint-img">';
                            if (element["image"]) {
                                var img_tag = '<img id="' + element["id"] +'" src="' + element["image"] + '"  alt="Find Solution">';
                            } else {
                                var img_tag = '<img id="' + element["id"] +'" src="/static/blog_frontend/image/search-icon-img.jpg"  alt="Find Solution">';
                            }
                            var html_tag = div_tag + img_tag + '</div><div class="col-md-10 hint-title"><p id="' + element["id"] + '" value="' + element["name"] + '">' + element["name"] + '</p> </div></div>';
                            $('#topicsearch-selction-ajax').append(html_tag);
                            $('#topicsearch-selction-ajax').show();
                        });
                    } else {
                        $('#topicsearch-selction-ajax').hide();
                    }
                }
        });
    } else {
        $('#topicsearch-selction-ajax').hide();
    }
})

var healingelementIsClicked = false;
$('#healingsearch').bind("keyup", function(e){
    if (($('#bySolutionOrCondition').is(":checked"))){
    var baseURL = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '');
    if (healingelementIsClicked && e.keyCode == 8) {
        $('#healingsearch').val('')
        $(this).val('')
        $('#healing-selction-ajax').hide();

    } else if ($(this).val().length > 1){
        window.showLoadingEnabled = false;
        $.ajax({
            url: baseURL+"/condition-search?query=" + $(this).val() + "&type=general",
            type: "GET",
            contentType:'application/json',
            dataType: 'json',
            success: function (data) {
                    var data = data['data'];
                    console.log(data)
                    if (data.length > 0) {
                        healingelementIsClicked = false;
                        $('.hint-tab').remove();
                        $.each(data, function (index, element) {
                            console.log(data[index]);
                            if (data[index]['conditionId']){
                                element["id"] = data[index]['conditionId']
                            }
                            var div_tag = '<div class="row hint-tab ajax_condition_data" onclick="get_healingsearch_data(this)" id="' + element["id"] + '" value="' + element["name"] + '"><div class="col-md-2 hint-img">';
                            if (element["image"]) {
                                var img_tag = '<img id="' + element["id"] +'" src="' + element["image"] + '"  alt="Find Solution">';
                            } else {
                                var img_tag = '<img id="' + element["id"] +'" src="/static/blog_frontend/image/search-icon-img.jpg"  alt="Find Solution">';
                            }
                            var html_tag = div_tag + img_tag + '</div><div class="col-md-10 hint-title"><p id="' + element["id"] + '" value="' + element["name"] + '">' + element["name"] + '</p> </div></div>';
                            $('#healing-selction-ajax').append(html_tag);
                            $('#healing-selction-ajax').show();
                        });
                    } else {
                        $('#healing-selction-ajax').hide();
                    }
                }
        });
    } else {
        $('#healing-selction-ajax').hide();
    }
}
    })



var healingelementIsClicked = false;
$('#conditionsearch').bind("keyup", function(e){
        var baseURL = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '');
        if (healingelementIsClicked && e.keyCode == 8) {
            $('#conditionsearch').val('')
            $(this).val('')
            $('#condition-selction-ajax').hide();

        } else if ($(this).val().length > 1){
            window.showLoadingEnabled = false;
            $.ajax({
                url: baseURL+"/condition-search?query=" + $(this).val() + "&type=condition",
                type: "GET",
                contentType:'application/json',
                dataType: 'json',
                success: function (data) {
                        var data = data['data'];
                        console.log(data)
                        if (data.length > 0) {
                            healingelementIsClicked = false;
                            $('.hint-tab').remove();
                            $.each(data, function (index, element) {
                                console.log(data[index]);
                                if (data[index]['conditionId']){
                                    element["id"] = data[index]['conditionId']
                                }
                                var div_tag = '<div class="row hint-tab ajax_condition_data" onclick="get_conditionsearch_data(this)" id="' + element["id"] + '" value="' + element["name"] + '"><div class="col-md-2 hint-img">';
                                // if (element["image"]) {
                                //     var img_tag = '<img id="' + element["id"] +'" src="' + element["image"] + '"  alt="Find Condition">';
                                // } else {
                                //     var img_tag = '<img id="' + element["id"] +'" src="/static/blog_frontend/image/search-icon-img.jpg"  alt="Find Condition">';
                                // }
                                var html_tag = div_tag + '</div><div class="col-md-10 hint-title"><p id="' + element["id"] + '" value="' + element["name"] + '">' + element["name"] + '</p> </div></div>';
                                $('#condition-selction-ajax').append(html_tag);
                                $('#condition-selction-ajax').show();
                            });
                        } else {
                            $('#condition-selction-ajax').hide();
                        }
                    }
            });        
}
    })

var healingelementIsClicked = false;
$('#conditionpreventionsearch').bind("keyup", function(e){
    if (($('#bySolutionOrCondition').is(":checked"))){
    var baseURL = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '');
    if (healingelementIsClicked && e.keyCode == 8) {
        $('#conditionpreventionsearch').val('')
        $(this).val('')
        $('#conditionprevention-selction-ajax').hide();

    } else if ($(this).val().length > 1){
        window.showLoadingEnabled = false;
        $.ajax({
            url: baseURL+"/condition-search?query=" + $(this).val() + "&type=conditionprevention",
            type: "GET",
            contentType:'application/json',
            dataType: 'json',
            success: function (data) {
                    var data = data['data'];
                    console.log(data)
                    if (data.length > 0) {
                        healingelementIsClicked = false;
                        $('.hint-tab').remove();
                        $.each(data, function (index, element) {
                            console.log(data[index]);
                            if (data[index]['conditionId']){
                                element["id"] = data[index]['conditionId']
                            }
                            var div_tag = '<div class="row hint-tab ajax_conditionprevention_data" onclick="get_conditionpreventionsearch_data(this)" id="' + element["id"] + '" value="' + element["name"] + '"><div class="col-md-2 hint-img">';
                            if (element["image"]) {
                                var img_tag = '<img id="' + element["id"] +'" src="' + element["image"] + '"  alt="Find Condition">';
                            } else {
                                var img_tag = '<img id="' + element["id"] +'" src="/static/blog_frontend/image/search-icon-img.jpg"  alt="Find Condition">';
                            }
                            var html_tag = div_tag + img_tag + '</div><div class="col-md-10 hint-title"><p id="' + element["id"] + '" value="' + element["name"] + '">' + element["name"] + '</p> </div></div>';
                            $('#conditionprevention-selction-ajax').append(html_tag);
                            $('#conditionprevention-selction-ajax').show();
                        });
                    } else {
                        $('#conditionprevention-selction-ajax').hide();
                    }
                }
        });
    } else {
        $('#conditionprevention-selction-ajax').hide();
    }
}
    })


var healingelementIsClicked = false;
$('#lib_conditionpreventionsearch').bind("keyup", function(e){
    if (($('#bySolutionOrCondition').is(":checked"))){
    var baseURL = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '');
    if (healingelementIsClicked && e.keyCode == 8) {
        $('#lib_conditionpreventionsearch').val('')
        $(this).val('')
        $('#lib_conditionprevention-selction-ajax').hide();

    } else if ($(this).val().length > 1){
        window.showLoadingEnabled = false;
        $.ajax({
            url: baseURL+"/condition-search?query=" + $(this).val() + "&type=lib_conditionprevention",
            type: "GET",
            contentType:'application/json',
            dataType: 'json',
            success: function (data) {
                    var data = data['data'];
                    console.log(data)
                    if (data.length > 0) {
                        healingelementIsClicked = false;
                        $('.hint-tab').remove();
                        $.each(data, function (index, element) {
                            console.log(data[index]);
                            if (data[index]['conditionId']){
                                element["id"] = data[index]['conditionId']
                            }
                            var div_tag = '<div class="row hint-tab ajax_lib_conditionprevention_data" onclick="get_lib_conditionpreventionsearch_data(this)" id="' + element["id"] + '" value="' + element["name"] + '"><div class="col-md-2 hint-img">';
                            if (element["image"]) {
                                var img_tag = '<img id="' + element["id"] +'" src="' + element["image"] + '"  alt="Find Condition">';
                            } else {
                                var img_tag = '<img id="' + element["id"] +'" src="/static/blog_frontend/image/search-icon-img.jpg"  alt="Find Condition">';
                            }
                            var html_tag = div_tag + img_tag + '</div><div class="col-md-10 hint-title"><p id="' + element["id"] + '" value="' + element["name"] + '">' + element["name"] + '</p> </div></div>';
                            $('#lib_conditionprevention-selction-ajax').append(html_tag);
                            $('#lib_conditionprevention-selction-ajax').show();
                        });
                    } else {
                        $('#lib_conditionprevention-selction-ajax').hide();
                    }
                }
        });
    } else {
        $('#lib_conditionprevention-selction-ajax').hide();
    }
}
    })

    

var healingelementIsClicked = false;
$('#debatabletopicsearch').bind("keyup", function(e){
    var baseURL = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '');
    if (healingelementIsClicked && e.keyCode == 8) {
       
        $('#debatabletopicsearch').val('')
        $(this).val('')
        $('#debatabletopic-selction-ajax').hide();

    } else if ($(this).val().length > 1){
       
        window.showLoadingEnabled = false;
        $.ajax({
            url: baseURL+"/condition-search?query=" + $(this).val() + "&type=debatabletopic",
            type: "GET",
            contentType:'application/json',
            dataType: 'json',
            success: function (data) {
                    var data = data['data'];
                    console.log(data)
                    if (data.length > 0) {
                        healingelementIsClicked = false;
                        $('.hint-tab').remove();
                        $.each(data, function (index, element) {
                            console.log(data[index]);
                            if (data[index]['debatabletopicId']){
                                element["id"] = data[index]['debatabletopicId']
                            }
                            var div_tag = '<div class="row hint-tab ajax_debatabletopic_data" onclick="get_debatabletopicsearch_data(this)" id="' + element["id"] + '" value="' + element["name"] + '"><div class="col-md-2 hint-img">';
                            // if (element["image"]) {
                            //     var img_tag = '<img id="' + element["id"] +'" src="' + element["image"] + '"  alt="Find debatable topic">';
                            // } else {
                            //     var img_tag = '<img id="' + element["id"] +'" src="/static/blog_frontend/image/search-icon-img.jpg"  alt="Find debatable topic">';
                            // }
                            var html_tag = div_tag + '</div><div class="col-md-10 hint-title"><p id="' + element["id"] + '" value="' + element["name"] + '">' + element["name"] + '</p> </div></div>';
                            $('#debatabletopic-selction-ajax').append(html_tag);
                            $('#debatabletopic-selction-ajax').show();
                        });
                    } else {
                        $('#debatabletopic-selction-ajax').hide();
                    }
                }
        });
    } else {
        $('#conditionprevention-selction-ajax').hide();
    }
    })

    
//detable topic start
var healingelementIsClicked = false;
$('#debatabletopicsearch').bind("keyup", function(e){
    if (($('#bySolutionOrCondition').is(":checked"))){

    var baseURL = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '');
    if (healingelementIsClicked && e.keyCode == 8) {
       
        $('#debatabletopicsearch').val('')
        $(this).val('')
        $('#debatabletopic-selction-ajax').hide();

    } else if ($(this).val().length > 1){
       
        window.showLoadingEnabled = false;
        $.ajax({
            url: baseURL+"/condition-search?query=" + $(this).val() + "&type=debatabletopic",
            type: "GET",
            contentType:'application/json',
            dataType: 'json',
            success: function (data) {
                    var data = data['data'];
                    console.log(data)
                    if (data.length > 0) {
                        healingelementIsClicked = false;
                        $('.hint-tab').remove();
                        $.each(data, function (index, element) {
                            console.log(data[index]);
                            if (data[index]['debatabletopicId']){
                                element["id"] = data[index]['debatabletopicId']
                            }
                            var div_tag = '<div class="row hint-tab ajax_debatabletopic_data" onclick="get_debatabletopicsearch_data(this)" id="' + element["id"] + '" value="' + element["name"] + '"><div class="col-md-2 hint-img">';
                            // if (element["image"]) {
                            //     var img_tag = '<img id="' + element["id"] +'" src="' + element["image"] + '"  alt="Find debatable topic">';
                            // } else {
                            //     var img_tag = '<img id="' + element["id"] +'" src="/static/blog_frontend/image/search-icon-img.jpg"  alt="Find debatable topic">';
                            // }
                            var html_tag = div_tag + img_tag + '</div><div class="col-md-10 hint-title"><p id="' + element["id"] + '" value="' + element["name"] + '">' + element["name"] + '</p> </div></div>';
                            $('#debatabletopic-selction-ajax').append(html_tag);
                            $('#debatabletopic-selction-ajax').show();
                        });
                    } else {
                        $('#debatabletopic-selction-ajax').hide();
                    }
                }
        });
    } else {
        $('#conditionprevention-selction-ajax').hide();
    }
}
    })

//detable topic end


var healingelementIsClicked = false;
$('#conditionhomeremediessearch').bind("keyup", function(e){
    if (($('#bySolutionOrCondition').is(":checked"))){
    var baseURL = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '');
    if (healingelementIsClicked && e.keyCode == 8) {
        $('#conditionhomeremediessearch').val('')
        $(this).val('')
        $('#conditionhomeremedies-selction-ajax').hide();

    } else if ($(this).val().length > 1){
        window.showLoadingEnabled = false;
        $.ajax({
            url: baseURL+"/condition-search?query=" + $(this).val() + "&type=conditionhomeremedies",
            type: "GET",
            contentType:'application/json',
            dataType: 'json',
            success: function (data) {
                    var data = data['data'];
                    console.log(data)
                    if (data.length > 0) {
                        healingelementIsClicked = false;
                        $('.hint-tab').remove();
                        $.each(data, function (index, element) {
                            console.log(data[index]);
                            if (data[index]['conditionId']){
                                element["id"] = data[index]['conditionId']
                            }
                            var div_tag = '<div class="row hint-tab ajax_conditionhomeremedies_data" onclick="get_conditionhomeremediessearch_data(this)" id="' + element["id"] + '" value="' + element["name"] + '"><div class="col-md-2 hint-img">';
                            if (element["image"]) {
                                var img_tag = '<img id="' + element["id"] +'" src="' + element["image"] + '"  alt="Find Condition">';
                            } else {
                                var img_tag = '<img id="' + element["id"] +'" src="/static/blog_frontend/image/search-icon-img.jpg"  alt="Find Condition">';
                            }
                            var html_tag = div_tag + img_tag + '</div><div class="col-md-10 hint-title"><p id="' + element["id"] + '" value="' + element["name"] + '">' + element["name"] + '</p> </div></div>';
                            $('#conditionhomeremedies-selction-ajax').append(html_tag);
                            $('#conditionhomeremedies-selction-ajax').show();
                        });
                    } else {
                        $('#conditionhomeremedies-selction-ajax').hide();
                    }
                }
        });
    } else {
        $('#conditionhomeremedies-selction-ajax').hide();
    }
}
    })
    
    
var healingelementIsClicked = false;
$('#lib_conditionhomeremediessearch').bind("keyup", function(e){
    if (($('#bySolutionOrCondition').is(":checked"))){
    var baseURL = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '');
    if (healingelementIsClicked && e.keyCode == 8) {
        $('#lib_conditionhomeremediessearch').val('')
        $(this).val('')
        $('#lib_conditionhomeremedies-selction-ajax').hide();

    } else if ($(this).val().length > 1){
        window.showLoadingEnabled = false;
        $.ajax({
            url: baseURL+"/condition-search?query=" + $(this).val() + "&type=lib_conditionhomeremedies",
            type: "GET",
            contentType:'application/json',
            dataType: 'json',
            success: function (data) {
                    var data = data['data'];
                    console.log(data)
                    if (data.length > 0) {
                        healingelementIsClicked = false;
                        $('.hint-tab').remove();
                        $.each(data, function (index, element) {
                            console.log(data[index]);
                            if (data[index]['conditionId']){
                                element["id"] = data[index]['conditionId']
                            }
                            var div_tag = '<div class="row hint-tab ajax_conditionhomeremedies_data" onclick="get_lib_conditionhomeremediessearch_data(this)" id="' + element["id"] + '" value="' + element["name"] + '"><div class="col-md-2 hint-img">';
                            if (element["image"]) {
                                var img_tag = '<img id="' + element["id"] +'" src="' + element["image"] + '"  alt="Find Condition">';
                            } else {
                                var img_tag = '<img id="' + element["id"] +'" src="/static/blog_frontend/image/search-icon-img.jpg"  alt="Find Condition">';
                            }
                            var html_tag = div_tag + img_tag + '</div><div class="col-md-10 hint-title"><p id="' + element["id"] + '" value="' + element["name"] + '">' + element["name"] + '</p> </div></div>';
                            $('#lib_conditionhomeremedies-selction-ajax').append(html_tag);
                            $('#lib_conditionhomeremedies-selction-ajax').show();
                        });
                    } else {
                        $('#lib_conditionhomeremedies-selction-ajax').hide();
                    }
                }
        });
    } else {
        $('#lib_conditionhomeremedies-selction-ajax').hide();
    }
}
    })    

var healingelementIsClicked = false;
$('#solutionsubsolutionsearch').bind("keyup", function(e){
        var baseURL = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '');
        if (healingelementIsClicked && e.keyCode == 8) {
            $('#solutionsubsolutionsearch').val('')
            $(this).val('')
            $('#solutionsubsolution-selction-ajax').hide();
        } else if ($(this).val().length > 1){
            window.showLoadingEnabled = false;
            $.ajax({
                url: baseURL+"/condition-search?query=" + $(this).val() + "&type=solution_and_subsolution",
                type: "GET",
                contentType:'application/json',
                dataType: 'json',
                success: function (data) {
                    var data = data['data'];
                    console.log(data)
                    if (data.length > 0) {
                        healingelementIsClicked = false;
                        $('.hint-tab').remove();
                        $.each(data, function (index, element) {
                            console.log(data[index]);
                            if (data[index]['solutionId']){
                                element["id"] = data[index]['solutionId']
                            }
                            if (data[index]['subsolutionId']){
                                element["id"] = data[index]['subsolutionId']
                            }
                            var div_tag = '<div class="row hint-tab ajax_solutionsubsolution_data" onclick="get_solutionsubsolutionsearch_data(this)" data-type="'+element["from_type"]+'" id="' + element["id"] + '" value="' + element["name"] + '"><div class="col-md-2 hint-img">';
                            // if (element["image"]) {
                            //     var img_tag = '<img id="' + element["id"] +'" src="' + element["image"] + '"  alt="Find solution subsolution">';
                            // } else {
                            //     var img_tag = '<img id="' + element["id"] +'" src="/static/blog_frontend/image/search-icon-img.jpg"  alt="Find solution subsolution">';
                            // }
                            var html_tag = div_tag + '</div><div class="col-md-10 hint-title"><p id="' + element["id"] + '" value="' + element["name"] + '">' + element["name"] + '</p> </div></div>';
                            $('#solutionsubsolution-selction-ajax').append(html_tag);
                            $('#solutionsubsolution-selction-ajax').show();


                        });
                    } else {
                        $('#solutionsubsolution-selction-ajax').hide();
                    }
            }
        });
    
}
    })


var healingelementIsClicked = false;
$('#lib_sol_con_search').bind("keyup", function(e){
    if (($('#bySolutionOrCondition').is(":checked"))){
    var baseURL = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '');
    if (healingelementIsClicked && e.keyCode == 8) {
        $('#lib_sol_con_search').val('')
        $(this).val('')
        $('#lib_sol_con-selction-ajax').hide();

    } else if ($(this).val().length > 1){
        window.showLoadingEnabled = false;
        $.ajax({
            url: baseURL+"/condition-search?query=" + $(this).val() + "&type=lib_condition_solution",
            type: "GET",
            contentType:'application/json',
            dataType: 'json',
            success: function (data) {
                    var data = data['data'];
                    console.log(data)
                    if (data.length > 0) {
                        healingelementIsClicked = false;
                        $('.hint-tab').remove();
                        $.each(data, function (index, element) {
                            console.log(data[index]);
                            if (data[index]['solutionId']){
                                element["id"] = data[index]['solutionId']
                            }
                            if (data[index]['subsolutionId']){
                                element["id"] = data[index]['subsolutionId']
                            }
                            var div_tag = '<div class="row hint-tab ajax_lib_sol_con_data" onclick="get_lib_sol_con_search_data(this)" data-type="'+element["from_type"]+'" id="' + element["id"] + '" value="' + element["name"] + '"><div class="col-md-2 hint-img">';
                            if (element["image"]) {
                                var img_tag = '<img id="' + element["id"] +'" src="' + element["image"] + '"  alt="Find solution subsolution">';
                            } else {
                                var img_tag = '<img id="' + element["id"] +'" src="/static/blog_frontend/image/search-icon-img.jpg"  alt="Find solution subsolution">';
                            }
                            var html_tag = div_tag + img_tag + '</div><div class="col-md-10 hint-title"><p id="' + element["id"] + '" value="' + element["name"] + '">' + element["name"] + '</p> </div></div>';
                            $('#lib_sol_con-selction-ajax').append(html_tag);
                            $('#lib_sol_con-selction-ajax').show();
                        });
                    } else {
                        $('#lib_sol_con-selction-ajax').hide();
                    }
                }
        });
    } else {
        $('#lib_sol_con-selction-ajax').hide();
    }
}
    })
    
var healingelementIsClicked = false;
$('#con_sol_subsol_search').bind("keyup", function(e){
    if (($('#bySolutionOrCondition').is(":checked"))){
    var baseURL = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '');
    if (healingelementIsClicked && e.keyCode == 8) {
        $('#con_sol_subsol_search').val('')
        $(this).val('')
        $('#con_sol_subsol-selction-ajax').hide();

    } else if ($(this).val().length > 1){
        window.showLoadingEnabled = false;
        $.ajax({
            url: baseURL+"/condition-search?query=" + $(this).val() + "&type=condition_solution_subsolution",
            type: "GET",
            contentType:'application/json',
            dataType: 'json',
            success: function (data) {
                    var data = data['data'];
                    console.log(data)
                    if (data.length > 0) {
                        healingelementIsClicked = false;
                        $('.hint-tab').remove();
                        $.each(data, function (index, element) {
                            console.log(data[index]);
                            if (data[index]['solutionId']){
                                element["id"] = data[index]['solutionId']
                            }
                            if (data[index]['subsolutionId']){
                                element["id"] = data[index]['subsolutionId']
                            }
                            var div_tag = '<div class="row hint-tab ajax_con_sol_subsol_data" onclick="get_con_sol_subsol_search_data(this)" data-type="'+element["from_type"]+'" id="' + element["id"] + '" value="' + element["name"] + '"><div class="col-md-2 hint-img">';
                            if (element["image"]) {
                                var img_tag = '<img id="' + element["id"] +'" src="' + element["image"] + '"  alt="Find solution subsolution">';
                            } else {
                                var img_tag = '<img id="' + element["id"] +'" src="/static/blog_frontend/image/search-icon-img.jpg"  alt="Find solution subsolution">';
                            }
                            var html_tag = div_tag + img_tag + '</div><div class="col-md-10 hint-title"><p id="' + element["id"] + '" value="' + element["name"] + '">' + element["name"] + '</p> </div></div>';
                            $('#con_sol_subsol-selction-ajax').append(html_tag);
                            $('#con_sol_subsol-selction-ajax').show();
                        });
                    } else {
                        $('#con_sol_subsol-selction-ajax').hide();
                    }
                }
        });
    } else {
        $('#con_sol_subsol-selction-ajax').hide();
    }
}
    })
    

var healingelementIsClicked = false;
$('#lib_sol_subsol_search').bind("keyup", function(e){
    /*if (($('#bySolutionOrCondition').is(":checked"))){*/
    if ($('#bySolutionOrCondition').val()=='By solution or Condition'){
    var baseURL = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '');
    if (healingelementIsClicked && e.keyCode == 8) {
        $('#lib_sol_subsol_search').val('')
        $(this).val('')
        $('#lib_sol_subsol-selction-ajax').hide();

    } else if ($(this).val().length > 1){
        window.showLoadingEnabled = false;
        $.ajax({
            url: baseURL+"/condition-search?query=" + $(this).val() + "&type=lib_solution_and_subsolution",
            type: "GET",
            contentType:'application/json',
            dataType: 'json',
            success: function (data) {
                    var data = data['data'];
                    console.log(data)
                    if (data.length > 0) {
                        healingelementIsClicked = false;
                        $('.hint-tab').remove();
                        $.each(data, function (index, element) {
                            console.log(data[index]);
                            if (data[index]['solutionId']){
                                element["id"] = data[index]['solutionId']
                            }
                            if (data[index]['subsolutionId']){
                                element["id"] = data[index]['subsolutionId']
                            }
                            var div_tag = '<div class="row hint-tab ajax_lib_sol_subsol_data" onclick="get_lib_sol_subsol_search_data(this)" data-type="'+element["from_type"]+'" id="' + element["id"] + '" value="' + element["name"] + '"><div class="col-md-2 hint-img">';
                            if (element["image"]) {
                                var img_tag = '<img id="' + element["id"] +'" src="' + element["image"] + '"  alt="Find solution or subsolution">';
                            } else {
                                var img_tag = '<img id="' + element["id"] +'" src="/static/blog_frontend/image/search-icon-img.jpg"  alt="Find solution or subsolution">';
                            }
                            var html_tag = div_tag + img_tag + '</div><div class="col-md-10 hint-title"><p id="' + element["id"] + '" value="' + element["name"] + '">' + element["name"] + '</p> </div></div>';
                            $('#lib_sol_subsol-selction-ajax').append(html_tag);
                            $('#lib_sol_subsol-selction-ajax').show();
                        });
                    } else {
                        $('#lib_sol_subsol-selction-ajax').hide();
                    }
                }
        });
    } else {
        $('#lib_sol_subsol-selction-ajax').hide();
    }
}
    })

    
var healingelementIsClicked = false;
$('#lib_condition_search').bind("keyup", function(e){
    if ($('#bySolutionOrCondition').val()=='By solution or Condition'){
    /*if (($('#bySolutionOrCondition').is(":checked"))){*/
        var baseURL = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '');
    if (healingelementIsClicked && e.keyCode == 8) {
        $('#lib_condition_search').val('')
        $(this).val('')
        $('#lib_condition-selction-ajax').hide();

    } else if ($(this).val().length > 1){
        window.showLoadingEnabled = false;
        $.ajax({
            url: baseURL+"/condition-search?query=" + $(this).val() + "&type=lib_condition",
            type: "GET",
            contentType:'application/json',
            dataType: 'json',
            success: function (data) {
                    var data = data['data'];
                    console.log(data)
                    if (data.length > 0) {
                        healingelementIsClicked = false;
                        $('.hint-tab').remove();
                        $.each(data, function (index, element) {
                            console.log(data[index]);
                            if (data[index]['conditionId']){
                                element["id"] = data[index]['conditionId']
                            }
                            /*var div_tag = '<div class="row hint-tab ajax_lib_condition_data" onclick="get_lib_condition_search_data(this)" data-type="'+element["from_type"]+'" id="' + element["id"] + '" value="' + element["name"] + '"><div class="col-md-2 hint-img">';
                            if (element["image"]) {
                                var img_tag = '<img id="' + element["id"] +'" src="' + element["image"] + '"  alt="Find condition">';
                            } else {
                                var img_tag = '<img id="' + element["id"] +'" src="/static/blog_frontend/image/search-icon-img.jpg"  alt="Find condition">';
                            }
                            var html_tag = div_tag + img_tag + '</div><div class="col-md-10 hint-title"><p id="' + element["id"] + '" value="' + element["name"] + '">' + element["name"] + '</p> </div></div>';*/
                            var div_tag = '<div class="row hint-tab ajax_lib_condition_data" onclick="get_lib_condition_search_data(this)" data-type="'+element["from_type"]+'" id="' + element["id"] + '" value="' + element["name"] + '"><div class="col-md-2 hint-img">';
                            var html_tag = div_tag + '</div><div class="col-md-10 hint-title"><p id="' + element["id"] + '" value="' + element["name"] + '">' + element["name"] + '</p> </div></div>';
                            $('#lib_condition-selction-ajax').append(html_tag);
                            $('#lib_condition-selction-ajax').show();
                        });
                    } else {
                        $('#lib_condition-selction-ajax').hide();
                    }
                }
        });
    } else {
        $('#lib_condition-selction-ajax').hide();
    }
}
    })
    
   
    

var healingelementIsClicked = false;
$('#sol_subsol_science_opinionsearch').bind("keyup", function(e){
    if (($('#bySolutionOrCondition').is(":checked"))){
    var baseURL = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '');
    if (healingelementIsClicked && e.keyCode == 8) {
        $('#sol_subsol_science_opinionsearch').val('')
        $(this).val('')
        $('#sol_subsol_science_opinion-selction-ajax').hide();

    } else if ($(this).val().length > 1){
        window.showLoadingEnabled = false;
        $.ajax({
            url: baseURL+"/condition-search?query=" + $(this).val() + "&type=solution_subsolution_sci_opinion",
            type: "GET",
            contentType:'application/json',
            dataType: 'json',
            success: function (data) {
                    var data = data['data'];
                    console.log(data)
                    if (data.length > 0) {
                        healingelementIsClicked = false;
                        $('.hint-tab').remove();
                        $.each(data, function (index, element) {
                            console.log(data[index]);
                            if (data[index]['solutionId']){
                                element["id"] = data[index]['solutionId']
                            }
                            if (data[index]['subsolutionId']){
                                element["id"] = data[index]['subsolutionId']
                            }
                            var div_tag = '<div class="row hint-tab ajax_sol_subsol_science_opinion_data" onclick="get_sol_subsol_science_opinionsearch_data(this)" data-type="'+element["from_type"]+'" id="' + element["id"] + '" value="' + element["name"] + '"><div class="col-md-2 hint-img">';
                            if (element["image"]) {
                                var img_tag = '<img id="' + element["id"] +'" src="' + element["image"] + '"  alt="Find solution subsolution">';
                            } else {
                                var img_tag = '<img id="' + element["id"] +'" src="/static/blog_frontend/image/search-icon-img.jpg"  alt="Find solution subsolution">';
                            }
                            var html_tag = div_tag + img_tag + '</div><div class="col-md-10 hint-title"><p id="' + element["id"] + '" value="' + element["name"] + '">' + element["name"] + '</p> </div></div>';
                            $('#sol_subsol_science_opinion-selction-ajax').append(html_tag);
                            $('#sol_subsol_science_opinion-selction-ajax').show();
                        });
                    } else {
                        $('#sol_subsol_science_opinion-selction-ajax').hide();
                    }
                }
        });
    } else {
        $('#sol_subsol_science_opinion-selction-ajax').hide();
    }
}
    })
  
var healingelementIsClicked = false;
$('#lib_science_opinion_search').bind("keyup", function(e){
    if (($('#bySolutionOrCondition').is(":checked"))){
    var baseURL = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '');
    if (healingelementIsClicked && e.keyCode == 8) {
        $('#lib_science_opinion_search').val('')
        $(this).val('')
        $('#lib_science_opinion-selction-ajax').hide();

    } else if ($(this).val().length > 1){
        window.showLoadingEnabled = false;
        $.ajax({
            url: baseURL+"/condition-search?query=" + $(this).val() + "&type=lib_science_opinion",
            type: "GET",
            contentType:'application/json',
            dataType: 'json',
            success: function (data) {
                    var data = data['data'];
                    console.log(data)
                    if (data.length > 0) {
                        healingelementIsClicked = false;
                        $('.hint-tab').remove();
                        $.each(data, function (index, element) {
                            console.log(data[index]);
                            if (data[index]['solutionId']){
                                element["id"] = data[index]['solutionId']
                            }
                            if (data[index]['subsolutionId']){
                                element["id"] = data[index]['subsolutionId']
                            }
                            var div_tag = '<div class="row hint-tab ajax_lib_science_opinion_data" onclick="get_lib_science_opinion_search_data(this)" data-type="'+element["from_type"]+'" id="' + element["id"] + '" value="' + element["name"] + '"><div class="col-md-2 hint-img">';
                            if (element["image"]) {
                                var img_tag = '<img id="' + element["id"] +'" src="' + element["image"] + '"  alt="Find solution subsolution">';
                            } else {
                                var img_tag = '<img id="' + element["id"] +'" src="/static/blog_frontend/image/search-icon-img.jpg"  alt="Find solution subsolution">';
                            }
                            var html_tag = div_tag + img_tag + '</div><div class="col-md-10 hint-title"><p id="' + element["id"] + '" value="' + element["name"] + '">' + element["name"] + '</p> </div></div>';
                            $('#lib_science_opinion-selction-ajax').append(html_tag);
                            $('#lib_science_opinion-selction-ajax').show();
                        });
                    } else {
                        $('#lib_science_opinion-selction-ajax').hide();
                    }
                }
        });
    } else {
        $('#lib_science_opinion-selction-ajax').hide();
    }
}
    })
// $(document).ready(function (){
//     $('#selction-ajax').on('click','.ajax_condition_data',function(e){
//
//     e.preventDefault()
//     $('#q').val(this.textContent);
//     if (this.id) {
//     $('#condition_id').val(+this.id)
//     }
//     $('#selction-ajax').hide();
//     })    
// })

function get_condition_data(e) {
    $('#q').val(e.textContent)
    elementIsClicked = true;
    var src = $(e).children('div').children('img').attr('src')
    if (src) {

        $('#q').css("backgroundImage", "url(" + src + ")");
        $('#q').addClass("bg");
        $('.apos-search-tool input.apos-tool').css("padding","0px 118px")
    } else {
        $("#q").css("backgroundImage","none");
        $('#q').removeClass("bg")
        $('.apos-search-tool input.apos-tool').css("padding","0px 20px")
    }
    if (e.id){
        $('#condition_id').val(+e.id)
    }
    $('#selction-ajax').hide();
    
}


function get_topicsearch_data(e) {
    $('#topicsearch').val(e.textContent)
    topicelementIsClicked = true;
    var src = $(e).children('div').children('img').attr('src')
    if (src) {

        $('#topicsearch').css("backgroundImage", "url(" + src + ")");
        $('#topicsearch').addClass("bg");
        $('.search-by-int').css("padding","0px 118px")
    } else {
        $("#topicsearch").css("backgroundImage","none");
        $('#topicsearch').removeClass("bg")
        $('.search-by-int').css("padding","0px 20px")
    }
    if (e.id){
        $('#solution_condition_id').val(+e.id)
    }
    $('#topicsearch-selction-ajax').hide();
    
}
function get_healingsearch_data(e){
    $('#healingsearch').val(e.textContent)
    healingelementIsClicked = true;
    if (e.id){
        $('#healingsearch_condition_id').val(+e.id)
    }
    $('#healing-selction-ajax').hide();
}

// function get_conditionsearch_data(e){
//     $('#conditionsearch').val(e.textContent)
//     $('#conditionsearchform').prop('action','/condition-page/related-topics/'+(e.textContent).replace("/", '').trim().split(" ").join("-").toLowerCase()+'/'+e.id)

    

//     healingelementIsClicked = true;
//     if (e.id){
//         $('#conditionsearch_condition_id').val(+e.id)
//     }
//     $('#condition-selction-ajax').hide();
// }

function get_conditionsearch_data(e){

    var filtertext = e.textContent.replace(/\(|\)/g, '').replace('/','').replace(/\s+/g, " ");
    $('#conditionsearch').val(e.textContent)
    $('#conditionsearchform').prop('action','/health-conditions/'+(filtertext).replace("/", '').trim().split(" ").join("-").toLowerCase())

    healingelementIsClicked = true;
    if (e.id){
        $('#conditionsearch_condition_id').val(+e.id)
    }
    $('#condition-selction-ajax').hide();
}


function get_lib_condition_search_data(e){
    $('#lib_condition_search').val(e.textContent)
    $('#lib_condition_searchform').prop('action','/condition-page/section-wise/'+(e.textContent).replace("/", '').trim().split(" ").join("-").toLowerCase()+'/'+e.id+'/0')
    healingelementIsClicked = true;
    if (e.id){
        $('#lib_condition_search_condition_id').val(+e.id)
    }
    $('#lib_condition-selction-ajax').hide();
}


function get_conditionhomeremediessearch_data(e){
    $('#conditionhomeremediessearch').val(e.textContent)
    $('#conditionhomeremediessearchform').prop('action','/condition-home-remedies/'+(e.textContent).replace("/", '').trim().split(" ").join("-").toLowerCase()+'/'+e.id+'/0/0')
    healingelementIsClicked = true;
    if (e.id){
        $('#conditionhomeremediessearch_condition_id').val(+e.id)
    }
    $('#conditionhomeremedies-selction-ajax').hide();
}


function get_lib_conditionhomeremediessearch_data(e){
    $('#lib_conditionhomeremediessearch').val(e.textContent)
    $('#lib_conditionhomeremediessearchform').prop('action','/condition-home-remedies/'+(e.textContent).replace("/", '').trim().split(" ").join("-").toLowerCase()+'/'+e.id+'/0/0')
    healingelementIsClicked = true;
    if (e.id){
        $('#lib_conditionhomeremediessearch_condition_id').val(+e.id)
    }
    $('#lib_conditionhomeremedies-selction-ajax').hide();
}


function get_debatabletopicsearch_data(e){
    $('#debatabletopicsearch').val(e.textContent)
    $('#debatabletopicsearchform').prop('action','/debatable-topics/'+(e.textContent).replace("/", '').trim().split(" ").join("-").toLowerCase()+'/'+e.id)
    healingelementIsClicked = true;
    if (e.id){
        $('#debatabletopicsearch_condition_id').val(+e.id)
    }
    $('#debatabletopic-selction-ajax').hide();
}

function get_conditionpreventionsearch_data(e){
    $('#conditionpreventionsearch').val(e.textContent)
    $('#conditionpreventionsearchform').prop('action','/condition-prevention-center/'+(e.textContent).replace("/", '').trim().split(" ").join("-").toLowerCase()+'/'+e.id+'/0/0')
    healingelementIsClicked = true;
    if (e.id){
        $('#conditionpreventionsearch_condition_id').val(+e.id)
    }
    $('#conditionprevention-selction-ajax').hide();
}

function get_lib_conditionpreventionsearch_data(e){
    $('#lib_conditionpreventionsearch').val(e.textContent)
    $('#lib_conditionpreventionsearchform').prop('action','/condition-page/health-tips/'+(e.textContent).replace("/", '').trim().split(" ").join("-").toLowerCase()+'/'+e.id)
    healingelementIsClicked = true;
    if (e.id){
        $('#lib_conditionpreventionsearch_condition_id').val(+e.id)
    }
    $('#lib_conditionprevention-selction-ajax').hide();
}

// function get_solutionsubsolutionsearch_data(e){
    
//     $('#solutionsubsolutionsearch').val(e.textContent)
//     if($(e).attr('data-type')=='sub_solution'){
//         $('#solutionsubsolutionsearchform').prop('action','/subsolution-apos/apos-corner/'+(e.textContent).replace("/", '').trim().split(" ").join("-").toLowerCase()+'/'+e.id)
//     }
//     else{
        
//         $('#solutionsubsolutionsearchform').prop('action','/solution-page/related-topics/'+(e.textContent).replace("/", '').trim().split(" ").join("-").toLowerCase()+'/'+e.id)
//     }
//     healingelementIsClicked = true;
//     if (e.id){
//         $('#solutionsubsolutionsearch_solution_id').val(+e.id)
//     }
//     $('#solutionsubsolution-selction-ajax').hide();
// }

function get_solutionsubsolutionsearch_data(e){
    
    $('#solutionsubsolutionsearch').val(e.textContent)
    if($(e).attr('data-type')=='sub_solution'){
        var filtertext = e.textContent.replace(/\(|\)/g, '').replace('/','').replace(/\s+/g, " ");
        $('#solutionsubsolutionsearchform').prop('action','/condition-natural-treatments/'+(filtertext).replace("/", '').trim().split(" ").join("-").toLowerCase())
    }
    else{
        var filtertext = e.textContent.replace(/\(|\)/g, '').replace('/','').replace(/\s+/g, " ");
        $('#solutionsubsolutionsearchform').prop('action','/natural-treatments/'+(filtertext).replace("/", '').trim().split(" ").join("-").toLowerCase())
    }
    healingelementIsClicked = true;
    if (e.id){
        $('#solutionsubsolutionsearch_solution_id').val(+e.id)
    }
    $('#solutionsubsolution-selction-ajax').hide();
}

function get_sol_subsol_science_opinionsearch_data(e){
    $('#sol_subsol_science_opinionsearch').val(e.textContent)
    if($(e).attr('data-type')=='sub_solution'){
        $('#sol_subsol_science_opinionsearchform').prop('action','/subsolution-page/science-opinion/'+(e.textContent).replace("/", '').trim().split(" ").join("-").toLowerCase()+'/'+e.id)
    }
    else{
        $('#sol_subsol_science_opinionsearchform').prop('action','/solution-page/science-opinion/'+(e.textContent).replace("/", '').trim().split(" ").join("-").toLowerCase()+'/'+e.id)
    }
    healingelementIsClicked = true;
    if (e.id){
        $('#sol_subsol_science_opinionsearch_solution_id').val(+e.id)
    }
    $('#sol_subsol_science_opinion-selction-ajax').hide();
}


function get_lib_science_opinion_search_data(e){
    $('#lib_science_opinion_search').val(e.textContent)
    if($(e).attr('data-type')=='sub_solution'){
        $('#lib_science_opinion_searchform').prop('action','/subsolution-page/science-opinion/'+(e.textContent).replace("/", '').trim().split(" ").join("-").toLowerCase()+'/'+e.id)
    }
    else{
        $('#lib_science_opinion_searchform').prop('action','/solution-page/science-opinion/'+(e.textContent).replace("/", '').trim().split(" ").join("-").toLowerCase()+'/'+e.id)
    }
    healingelementIsClicked = true;
    if (e.id){
        $('#lib_science_opinion_search_solution_id').val(+e.id)
    }
    $('#lib_science_opinion-selction-ajax').hide();
}

function get_lib_sol_subsol_search_data(e){
    $('#lib_sol_subsol_search').val(e.textContent)
    if($(e).attr('data-type')=='sub_solution'){
        $('#lib_sol_subsol_searchform').prop('action','/subsolution-page/section-wise/'+(e.textContent).replace("/", '').trim().split(" ").join("-").toLowerCase()+'/'+e.id+'/0')
    }
    else{
        $('#lib_sol_subsol_searchform').prop('action','/solution-page/section-wise/'+(e.textContent).replace("/", '').trim().split(" ").join("-").toLowerCase()+'/'+e.id+'/0')
    }
    healingelementIsClicked = true;
    if (e.id){
        $('#lib_sol_subsol_search_solution_id').val(+e.id)
    }
    $('#lib_sol_subsol-selction-ajax').hide();
}

function get_lib_sol_con_search_data(e){
    $('#lib_sol_con_search').val(e.textContent)
    if($(e).attr('data-type')=='sub_solution'){
        $('#lib_sol_con_searchform').prop('action','/subsolution-apos/apos-corner/'+(e.textContent).replace("/", '').trim().split(" ").join("-").toLowerCase()+'/'+e.id)
    }
    else if($(e).attr('data-type')=='condition'){
        $('#lib_sol_con_searchform').prop('action','/condition-page/apos-corner/'+(e.textContent).replace("/", '').trim().split(" ").join("-").toLowerCase()+'/'+e.id)
    }
    else{
        $('#lib_sol_con_searchform').prop('action','/solution-page/apos-corner/'+(e.textContent).replace("/", '').trim().split(" ").join("-").toLowerCase()+'/'+e.id)
    }
    healingelementIsClicked = true;
    if (e.id){
        $('#lib_sol_con_search_solution_id').val(+e.id)
    }
    $('#lib_sol_con-selction-ajax').hide();
}

function get_con_sol_subsol_search_data(e){
    $('#con_sol_subsol_search').val(e.textContent)
    if($(e).attr('data-type')=='sub_solution'){
        $('#con_sol_subsol_searchform').prop('action','/subsolution-page/'+(e.textContent).replace("/", '').trim().split(" ").join("-").toLowerCase()+'/'+e.id)
    }
    else if($(e).attr('data-type')=='condition'){
        $('#con_sol_subsol_searchform').prop('action','/condition-page/fff'+(e.textContent).replace("/", '').trim().split(" ").join("-").toLowerCase()+'/'+e.id)
    }
    else{
        $('#con_sol_subsol_searchform').prop('action','/solution-page/'+(e.textContent).replace("/", '').trim().split(" ").join("-").toLowerCase()+'/'+e.id)
    }
    healingelementIsClicked = true;
    if (e.id){
        $('#con_sol_subsol_search_solution_id').val(+e.id)
    }
    $('#con_sol_subsol-selction-ajax').hide();
}

function validateForm() {
    hint = $(".hint-tab").first();
    if (hint.attr('id') && elementIsClicked == false){
        $('#selction-ajax').hide();
        $('#q').val(hint.text())
        elementIsClicked = true;
        var src = $(hint).children('div').children('img').attr('src')
        if (src) {
            $('#q').css("backgroundImage", "url(" + src + ")");
            $('#q').addClass("bg");
            $('.apos-search-tool input.apos-tool').css("padding","0px 118px")
        } else {
            $("#q").css("backgroundImage","none");
            $('#q').removeClass("bg")
            $('.apos-search-tool input.apos-tool').css("padding","0px 20px")
        }
        $('#condition_id').val(+hint.attr('id'))
        return false;
    }
    if ($('#condition_id').val()) {
        return true;
    } else {
        //alert('Oops ! Condition name you have entered is invalid')
        $('#conditionNotFoundModal').modal('show');
        return false;
    }
}

$("#home_search").submit(function(e){
    if (document.activeElement.id == 'q'){
        e.preventDefault();
    }
});

function getParameterByName(name, url) {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}


function onFacetChangeApplied(){
    console.log('yes')
	var url = window.location.href.split("?")[0];
	var search_query = getParameterByName('q');
	var url_with_search_query = url + '?q=' + search_query 
	$('input:checkbox.facet').each(function () {
    	var sThisVal = (this.checked ? $(this).val() : null);
        var sThisName = (this.checked ? $(this).attr('name') : null);
        if(sThisVal !== null){
        	url_with_search_query += '&'+encodeURIComponent(sThisName)+'='+encodeURIComponent(sThisVal);
        }
    });
	location.href = url_with_search_query;
	return true;
}    


function getQueryParams(){
    var vars = {}, hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars[hash[1]] = hash[0] ;
    }
    return vars;
}


$( document ).ready(function() {
	var all_params = getQueryParams();
	console.log(all_params);
	$.each( all_params, function( key, value ) {
		id = decodeURIComponent(key).replace(/\s/g,'');
        console.log(id);
		$('#'+id).attr('checked', 'checked');
		});
	
});
/*var baseURL = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '');
mywhyID = document.getElementById("why_sec");
var mywhyScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 200) {
        //mywhyID.className = "show"
        mywhyID.style.opacity = "1";
        mywhyID.style.left = "0";
    } else {
        //mywhyID.className = "hide"
        mywhyID.style.opacity = "0";
        mywhyID.style.left = "-100%";
    }
};
window.addEventListener("scroll", mywhyScrollFunc);
myDidYouAboutID = document.getElementById("did_you_about");
myDidYouAboutSubID = document.getElementById("did_you_about_sub");
var myDidYouAboutScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 400) {
        //myDidYouAboutID.className = "show";
        //myDidYouAboutSubID.className = "show";
        myDidYouAboutID.style.opacity = "1";
        myDidYouAboutID.style.left = "0";
        myDidYouAboutSubID.style.opacity = "1";
        myDidYouAboutSubID.style.left = "0";*/
        /*$.ajax({
            url: baseURL+"/home-did-you-about-list",
            type: "GET",
            contentType:'application/json',
            success: function (data) {
                    //var data = data['data'];
                console.log(data);*/
                /*$.each(data, function (index, element) {
                    console.log(element["solution_for"]["profile_image"]);*/

                    /*var div_tag = '<div class="item"><div class="thumb-wrapper"><a href="{% url 'sub-solution-page' name=sol.solution_for.slug|slugify %}"><div class="img-box">';
                                if (element["image"]) {    
                                   var img_tag = '<img src="{% if sol.solution_for.profile_image %}{{ sol.solution_for.profile_image.url }}{% elif sol.solution_for.solution.profile_image %}{{ sol.solution_for.solution.profile_image.url }}{% else %}{% static DEFAULT_IMAGE_LOGO %}{% endif %}" class="img-fluid" alt="">';
                                } else {
                                   var img_tag = '<img src="{% if sol.solution_for.profile_image %}{{ sol.solution_for.profile_image.url }}{% elif sol.solution_for.solution.profile_image %}{{ sol.solution_for.solution.profile_image.url }}{% else %}{% static DEFAULT_IMAGE_LOGO %}{% endif %}" class="img-fluid" alt="">'; 
                                }
                    var html_tag = div_tag + img_tag + '</div> <div class="thumb-content"><h4>{{sol.solution_for.solution.name}} for {{sol.solution_for.condition.get_display_name_with_gender}}</h4></div></a></div></div>';
                                $('#selction-ajax').append(html_tag);
                                $('#selction-ajax').show();*/
                /*});*/
           /* }
        })
    } else {
        //myDidYouAboutID.className = "hide";
        //myDidYouAboutSubID.className = "hide";

        myDidYouAboutID.style.opacity = "0";
        myDidYouAboutID.style.left = "-100%";
        myDidYouAboutSubID.style.opacity = "0";
        myDidYouAboutSubID.style.left = "-100%";
    }
};
window.addEventListener("scroll", myDidYouAboutScrollFunc);
myFindOutID = document.getElementById("find_out_sec");
var myFindOutScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 600) {
        //myFindOutID.className = "show"
        myFindOutID.style.opacity = "1";
        myFindOutID.style.left = "0";
    } else {
        //myFindOutID.className = "hide"
        myFindOutID.style.opacity = "0";
        myFindOutID.style.left = "-100%";
    }
};
window.addEventListener("scroll", myFindOutScrollFunc);
myDebatableTopicsID = document.getElementById("debatable_topics_sec");
var myDebatableTopicsScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 800) {
        //myDebatableTopicsID.className = "show"
        myDebatableTopicsID.style.opacity = "1";
        myDebatableTopicsID.style.left = "0";
    } else {
        //myDebatableTopicsID.className = "hide"
        myDebatableTopicsID.style.opacity = "0";
        myDebatableTopicsID.style.left = "-100%";
    }
};
window.addEventListener("scroll", myDebatableTopicsScrollFunc);
*/T