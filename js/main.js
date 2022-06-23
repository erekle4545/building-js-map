
$(document).ready(function () {
    // slick
    // $('.slick-carousel').slick({
    //     infinite: true,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     dots: false
    // });
    const options = {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false
    }



    // end Slicker

    // set Default tower map
    $('.set').click(function () {
        const id = $(this).data('id');
        if (id == 1) {
            $('.set_' + id).addClass('active');
            $('.set_2,.set_3').removeClass('active');

            $('.left-side,.room-content-room').html('' +
                '<svg  version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1190.6 719" xml:space="preserve">\n' +
                '     <image style="overflow:visible;" xlink:href="./img/photo03.jpg" transform="matrix(0.24 0 0 0.24 0 0)"></image>\n' +
                '    <polygon class="st0" points="322.4,164.2 322.4,343.2 177,343.2 177,164.2 " />\n' +
                '<a href="javascript:;" class="apartments" data-floor="1" data-apartment="1">\n' +
                '              <polygon class="st0 " data-apartment="1" points="322.4,164.2 322.4,343.2 177,343.2 177,164.2 " />\n' +
                '</a>\n' +
                '<a href="javascript:;" class="apartments" data-floor="1" data-apartment="2">\n' +
                '  <polygon data-apartment="2" class="st0 " points="469.5,164.2 469.5,343.2 322.4,343.2 322.4,164.2 " />\n' +
                '</a>\n' +
                '<a href="javascript:;" class="apartments" data-floor="1" data-apartment="3">\n' +
                '  <polygon class="st0 " data-apartment="3" points="616.7,164.2 616.6,343.2 469.5,343.2 469.5,164.2 " />\n' +
                '</a>\n' +
                '<a href="javascript:;" class="apartments" data-floor="1" data-apartment="4">\n' +
                '   <polygon class="st0 " data-apartment="4" points="763.8,164.2 763.7,343.2 616.7,343.2 616.7,164.2 " />\n' +
                '</a>\n' +
                '<a href="javascript:;" class="apartments" data-floor="1" data-apartment="5">\n' +
                '   <polygon class="st0 " data-apartment="5" points="910.9,164.2 910.9,343.2 763.8,343.2 763.8,164.2 " />\n' +
                '</a>\n' +
                '<a href="javascript:;" class="apartments" data-floor="1" data-apartment="6">\n' +
                '   <polygon class="st0 " data-apartment="6" points="1056.7,164.2 1056.6,343.2 910.9,343.2 910.9,164.2 " />\n' +
                '</a>\n' +
                '<a href="javascript:;" class="apartments" data-floor="1" data-apartment="7">\n' +
                '   <polygon class="st0 " data-apartment="7" points="469.5,388.6 469.4,567.6 177,567.6 177,388.6 " />\n' +
                '</a>\n' +
                '<a href="javascript:;" class="apartments" data-floor="1" data-apartment="8">\n' +
                '   <polygon class="st0 " data-apartment="8" points="763.7,388.6 763.6,567.6 469.5,567.6 469.5,388.6 " />\n' +
                '</a>\n' +
                '<a href="javascript:;" class="apartments" data-floor="1" data-apartment="9">\n' +
                '   <polygon class="st0 " data-apartment="9" points="1056.7,388.6 1056.6,567.6 763.8,567.6 763.8,388.6 " />\n' +
                '</a>' +

                ' </svg>'
            )
        }
        else if (id == 2) {
            $('.set_' + id).addClass('active');
            $('.set_1,.set_3').removeClass('active');

            $('.left-side,.room-content-room').html('' +
                '<svg  version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1190.6 719" xml:space="preserve">\n' +
                '    <image style="overflow:visible;" xlink:href="./img/photo02.jpg" transform="matrix(0.24 0 0 0.24 0 0)"> </image>\n' +
                '    <a href="javascript:;" class="apartments" data-floor="2" data-apartment="1"><polygon data-apartment="1" class="st0" points="322.4,164.2 322.4,343.2 177,343.2 177,164.2 " /></a>\n' +
                '    <a href="javascript:;" class="apartments" data-floor="2" data-apartment="2"><polygon data-apartment="2" class="st0" points="469.5,164.2 469.5,343.2 322.4,343.2 322.4,164.2 " /></a>\n' +
                '    <a href="javascript:;" class="apartments" data-floor="2" data-apartment="3"><polygon data-apartment="3" class="st0" points="616.7,164.2 616.6,343.2 469.5,343.2 469.5,164.2 " /></a>\n' +
                '    <a href="javascript:;" class="apartments" data-floor="2" data-apartment="4"><polygon data-apartment="4" class="st0" points="763.8,164.2 763.7,343.2 616.7,343.2 616.7,164.2 " /></a>\n' +
                '    <a href="javascript:;" class="apartments" data-floor="2" data-apartment="5"><polygon data-apartment="5" class="st0" points="910.9,164.2 910.9,343.2 763.8,343.2 763.8,164.2 " /></a>\n' +
                '    <a href="javascript:;" class="apartments" data-floor="2" data-apartment="6"><polygon data-apartment="6" class="st0" points="1056.7,164.2 1056.6,343.2 910.9,343.2 910.9,164.2 " /></a>\n' +
                '    <a href="javascript:;" class="apartments" data-floor="2" data-apartment="7"><polygon data-apartment="7" class="st0" points="469.5,388.6 469.4,567.6 177,567.6 177,388.6 " /></a>\n' +
                '    <a href="javascript:;" class="apartments" data-floor="2" data-apartment="8"><polygon data-apartment="8" class="st0" points="763.7,388.6 763.6,567.6 469.5,567.6 469.5,388.6 " /></a>\n' +
                '    <a href="javascript:;" class="apartments" data-floor="2" data-apartment="9"><polygon data-apartment="9" class="st0" points="1056.7,388.6 1056.6,567.6 763.8,567.6 763.8,388.6 " /></a>\n' +

                '</svg>')
        }
        else if (id == 3) {
            $('.set_' + id).addClass('active');
            $('.set_2,.set_1').removeClass('active');
            $('.left-side,.room-content-room').html(
                '<svg  version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1190.6 719" xml:space="preserve">\n' +
                '   <image style="overflow:visible;" xlink:href="./img/photo01.jpg" transform="matrix(0.24 0 0 0.24 0 0)"> </image>\n' +
                '   <a href="javascript:;" class="apartments" data-floor="1" data-apartment="1"><polygon data-apartment="1" class="st0" points="322.4,164.2 322.4,343.2 177,343.2 177,164.2 " /></a>\n' +
                '   <a href="javascript:;" class="apartments" data-floor="1" data-apartment="2"><polygon data-apartment="2" class="st0" points="469.5,164.2 469.5,343.2 322.4,343.2 322.4,164.2 " /></a>\n' +
                '   <a href="javascript:;" class="apartments" data-floor="1" data-apartment="3"><polygon data-apartment="3" class="st0" points="616.7,164.2 616.6,343.2 469.5,343.2 469.5,164.2 " /></a>\n' +
                '   <a href="javascript:;" class="apartments" data-floor="1" data-apartment="4"><polygon data-apartment="4" class="st0" points="763.8,164.2 763.7,343.2 616.7,343.2 616.7,164.2 " /></a>\n' +
                '   <a href="javascript:;" class="apartments" data-floor="1" data-apartment="5"><polygon data-apartment="5" class="st0" points="910.9,164.2 910.9,343.2 763.8,343.2 763.8,164.2 " /></a>\n' +
                '   <a href="javascript:;" class="apartments" data-floor="1" data-apartment="6"><polygon data-apartment="6" class="st0" points="1056.7,164.2 1056.6,343.2 910.9,343.2 910.9,164.2 " /></a>\n' +
                '   <a href="javascript:;" class="apartments" data-floor="1" data-apartment="7"><polygon data-apartment="7" class="st0" points="469.5,388.6 469.4,567.6 177,567.6 177,388.6 " /></a>\n' +
                '   <a href="javascript:;" class="apartments" data-floor="1" data-apartment="8"><polygon data-apartment="8" class="st0" points="763.7,388.6 763.6,567.6 469.5,567.6 469.5,388.6 " /></a>\n' +
                '   <a href="javascript:;" class="apartments" data-floor="1" data-apartment="9"><polygon data-apartment="9" class="st0" points="1056.7,388.6 1056.6,567.6 763.8,567.6 763.8,388.6 " /></a>\n' +
                '</svg>')
        }
    })
    // End default tower map
    // import json Data
    $.getJSON("data.json", function(data){

        // floors 3
        $(document).on('click', '.apartments[data-floor="3"]', function() {
            $('.st0').removeClass('active-room');
            const apartment = $(this).data('apartment');
            data.floor_3.map(item =>{
                if(item.apartment === apartment){
                    $('.st0[data-apartment="'+apartment+'"]').addClass('active-room');
                    $('.st0'+apartment).removeClass('active-room');
                    $('.roomNumber').html(`${item.label.roomNumber} <span>${item.apartment}</span>`)
                    $('.commonArea').html(`${item.label.commonArea} <span>${item.commonArea}</span>`)
                    $('.scalePoint').html(`${item.label.commonArea} <span>${item.commonArea}</span>`)
                    $('.balcony').html(`${item.label.balcony} <span>${item.balcony}</span>`)
                    $('.bedRoom').html(`${item.label.bedRoom} <span>${item.bedRoom}</span>`)
                    $('.price').html(`${item.label.price} <span>${item.price}</span>`)
                }
            });

            $('.slick-carousel').slick(options);
            // show rooms
            $('.active-floor,.rooms-left-side').show()
            //end show rooms
            // hide top first Content
            $('.left-side,.line,.right-side').hide()

        });

        // floors 2
        $(document).on('click', '.apartments[data-floor="2"]', function() {
            $('.st0').removeClass('active-room');
            const apartment = $(this).data('apartment');
            data.floor_2.map(item =>{
                if(item.apartment === apartment){
                    $('.st0[data-apartment="'+apartment+'"]').addClass('active-room');
                    $('.st0'+apartment).removeClass('active-room');
                    $('.roomNumber').html(`${item.label.roomNumber} <span>${item.apartment}</span>`)
                    $('.commonArea').html(`${item.label.commonArea} <span>${item.commonArea}</span>`)
                    $('.scalePoint').html(`${item.label.commonArea} <span>${item.commonArea}</span>`)
                    $('.balcony').html(`${item.label.balcony} <span>${item.balcony}</span>`)
                    $('.bedRoom').html(`${item.label.bedRoom} <span>${item.bedRoom}</span>`)
                    $('.price').html(`${item.label.price} <span>${item.price}</span>`)
                }
            });

            $('.slick-carousel').slick(options);
            // show rooms
            $('.active-floor,.rooms-left-side').show()
            //end show rooms
            // hide top first Content
            $('.left-side,.line,.right-side').hide()
        });

        // floors 1
        $(document).on('click', '.apartments[data-floor="1"]', function() {
            $('.st0').removeClass('active-room');
            const apartment = $(this).data('apartment');

            data.floor_1.map(item =>{
                if(item.apartment === apartment){
                    $('.st0[data-apartment="'+apartment+'"]').addClass('active-room');
                    $('.st0'+apartment).removeClass('active-room');
                    $('.roomNumber').html(`${item.label.roomNumber} <span>${item.apartment}</span>`)
                    $('.commonArea').html(`${item.label.commonArea} <span>${item.commonArea}</span>`)
                    $('.scalePoint').html(`${item.label.commonArea} <span>${item.commonArea}</span>`)
                    $('.balcony').html(`${item.label.balcony} <span>${item.balcony}</span>`)
                    $('.bedRoom').html(`${item.label.bedRoom} <span>${item.bedRoom}</span>`)
                    $('.price').html(`${item.label.price} <span>${item.price}</span>`)
                    console.log(item.img)
                    // item.img.map(imgItem=>{
                    //     $('.slick-carousel').html("<img src='"+imgItem.path+"' /> ")
                    //     $('.slick-carousel').slick('unslick');
                    //
                    // });

                }
            });

            $('.slick-carousel').slick(options);
            // show rooms
            $('.active-floor,.rooms-left-side').show()
            //end show rooms
            // hide top first Content
            $('.left-side,.line,.right-side').hide()
        });


    }).fail(function(){
        // error  connection data json
        console.log("An error has occurred.");
    });
});