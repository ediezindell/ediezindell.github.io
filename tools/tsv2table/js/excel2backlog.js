$(function(){

    $(".tabTextArea").keydown(function(e){
        if (e.keyCode === 9) {
            e.preventDefault();
            var elem = e.target;
            var val = elem.value;
            var pos = elem.selectionStart;
            elem.value = val.substr(0, pos) + '\t' + val.substr(pos, val.length);
            elem.setSelectionRange(pos + 1, pos + 1);
        }
    });

    $('.tarea').focus(function(){
        $(this).select();
    });

    $("#open_option").click(function() {
        $("#view_option").toggleClass('hidden');
    });

    $(".m1").click(function() {
        if (f1.m1.checked) {
            $(".mdp").prop('disabled',false);
            $(".tl").prop('disabled',true);
        } else {
            $(".mdp").prop('disabled',true);
            $(".tl").prop('disabled',false);
        }
    });

    $(".cnv").on("click change",function() {
        var str = f1.t1.value;
        var result = "";
        var result2 = "";
        num = parseInt(f1.n1.value);
        if (num < 0 | isNaN(num)) {
            num=0;
        }
        colcell = f1.r1[1].checked;
        rowcell = f1.r1[2].checked;

        colbold = f1.c1.checked;
        rowbold = f1.c2.checked;

        rep = f1.rep.value;

        str = str.replace(/\r\n/g, '\n');
        str = str.replace(/\r/g, '\n');
        var wqlist = str.split("\"");
        var brs = str.split("\n");
        var brs2 = str.split("\n");
        var colfirst = 1;

        md = f1.m1.checked;
        mdflag = 0;

        for (var i=0;i<brs.length;i++) {
            if(brs[i].length==0){
                break;
            }
            var words = brs[i].split("\t");
            var word = "";
            var word2 = "";

            if (md == true) {
                if (mdflag++ == 1) {
                // var mdstr="";
                // for (var j=0;j<words.length;j++) {

                //     if (f1.mdpr[0].checked) {
                //         mdstr = " :- | " + mdstr;
                //     } else if (f1.mdpr[1].checked) {
                //         mdstr = " :-: | " + mdstr;
                //     } else if (f1.mdpr[2].checked) {
                //         mdstr = " -: | " + mdstr;
                //     }
                // }
                // word = mdstr + word;
                // word = word + "\n|";
            }
        }

        var separater = "|";

        for(var j=0;j<words.length;j++) {

            if(colfirst == 1){
                if (f1.mdpr[0].checked) {
                    separater = separater + ":---|";
                } else if (f1.mdpr[1].checked) {
                    separater = separater + ":---:|";
                } else if (f1.mdpr[2].checked) {
                    separater = separater + "---:|";
                }
            }

            if(j==0) {
                if(colbold){
                    word = "|~" + word;
                } else {
                    word = "|" + word;
                }
            }

            if(rep!="" & words[j]==""){
                word = word + rep;
            } else {
                if (colcell & words[j]==""){
                    word = word + "~";
                } else if(rowcell & words[j]==""){
                    word = word + ">";
                } else {
                    word = word + strbr(words[j],num);
                }
            }
            word = word + "|";
        }
        if(colfirst == 1){
            if(colbold){
                word2 = word.replace(/^\|\~/g,"|");
                brs2[i] = word2.replace(/\&br\;/g,"<br>");
            } else {
                brs2[i] = word.replace(/\&br\;/g,"<br>");
            }
            if(rowbold){
                word = word + "h";
            }
            brs2[i+1] = separater;
        } else {
            word2 = word.replace(/^\|\~/g,"|");
            brs2[i+1] = word2.replace(/\&br\;/g,"<br>");
        }
        brs[i] = word;

        colfirst = 0;
    }
    for (var i=0;i<brs.length;i++) {
        result = result + brs[i];
        result = result + "\r\n";
    }
    for (var k=0;k<brs2.length;k++) {
        result2 = result2 + brs2[k];
        result2 = result2 + "\r\n";
    }
    f1.t2.value=result;
    f1.t3.value=result2;
    (result2);
});
});

function strbr(word,num) {
    if(num < 1){
        return word;
    }
    var ret = "";
    var now = 0;
    for(var i=0;i<word.length;i=i+num){
        if (word.length-i <= num) {
            ret = ret + word.substr(i,word.length-i);
            break;
        } else {
            ret = ret + word.substr(i,num)+"&br;";
        }
    }
    return ret;
}
