"use strict";$(function(){function e(e){function a(){var e=d-1;n--,I.html(e.toString()+":"+(n<10?"0":"")+String(n)),n>0?G=setTimeout(a,1e3):s()}var n=60,d=e;clearTimeout(G),a()}function s(){M.removeClass("start"),g.addClass("hidden"),M.addClass("lose"),v.addClass("hvr-pulse"),b.removeClass("hidden"),t.pause(),u.play(),q.addClass("hidden"),E=0}function a(){A.addClass("hidden"),v.removeClass("hvr-pulse"),g.removeClass("hidden"),M.addClass("start"),M.removeClass("win"),M.removeClass("lose"),i.pause(),u.pause(),b.addClass("hidden"),Q.addClass("hidden"),r.pause(),q.removeClass("hidden"),g.html("Question "+(E+1)+"/10"),t.play(),n()}function n(){e(1),f.get(0).reset();var s=Math.floor(Math.random()*allQuestions.length);S=allQuestions.splice(s,1)[0],D=S.correctAnswer,C.html(S.question),p.each(function(){S.answers.forEach(function(e,s){p.eq(s).html(e),c.eq(s).val(e)})})}function d(e){e.preventDefault(),x=$("input[type=radio]:checked").val(),o(S),console.log("player answers "+x+" when the answer should be "+D),x===D?m.play():h.play()}function o(e){x===D?(f.addClass("hidden"),T.removeClass("hidden"),y.removeClass("hidden"),k.append("<img src="+e.correctImage+">"),g.html(e.description),E+=1):s()}function l(){k.empty(),T.addClass("hidden"),y.addClass("hidden"),f.removeClass("hidden"),g.html("Question "+(E+1)+"/10"),E>=10?(clearTimeout(G),t.pause(),r.play(),M.removeClass("start"),M.addClass("win"),g.addClass("hidden"),v.addClass("hvr-pulse"),q.addClass("hidden"),g.html("Congrats!"),Q.removeClass("hidden"),E=0):n()}var i=new Audio("sounds/gangstasParadise.m4a"),t=new Audio("sounds/europa.m4a"),r=new Audio("sounds/feelGood.m4a"),u=new Audio("sounds/oneMoreTime.m4a"),m=new Audio("sounds/ding.wav"),h=new Audio("sounds/nope.mp4"),c=$("input[type=radio]"),p=$("label"),C=$(".questionHere"),v=$("#form"),f=$("form"),g=$("#heading"),w=$(".play"),y=$("#next"),A=$("#instructions"),b=$("#game-over"),q=$("#game-board"),Q=$("#win"),T=$("#placeImage"),k=$("#correctImage"),I=$("#timer"),M=$("body"),S=null,x=null,D=null,E=0,G=null;i.play(),w.on("click",a),f.on("submit",d),y.on("click",l)});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyIkIiwibWlucyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwiJHRpbWVyIiwiY3VycmVudE1pbnV0ZXMiLCJ0aW1lcklkIiwic2V0VGltZW91dCIsInRvU3RyaW5nIiwiU3RyaW5nIiwic3RvcmFnZSIsImNsZWFyVGltZW91dCIsInRpY2siLCIkYm9keSIsImFkZENsYXNzIiwiJGZvcm1FZmZlY3QiLCIkZ2FtZU92ZXIiLCJyZW1vdmVDbGFzcyIsImF1ZGlvMiIsImF1ZGlvNCIsIiRnYW1lQm9hcmQiLCJwYXVzZSIsImN1cnJlbnRSb3VuZCIsInN0YXJ0R2FtZSIsIiRoZWFkaW5nIiwiYXVkaW8xIiwiJHdpbiIsImF1ZGlvMyIsInBsYXkiLCJnZW5lcmF0ZVF1ZXN0aW9uc0Fuc3dlcnMiLCJodG1sIiwicmFuZG9tSW5kZXgiLCJxdWVzdGlvblNlbGVjdGVkIiwiY29ycmVjdEFuc3dlciIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImFsbFF1ZXN0aW9ucyIsImxlbmd0aCIsIiRxdWVzdGlvbkhlcmUiLCJxdWVzdGlvbiIsIiRsYWJlbHNIZXJlIiwiZXEiLCJhbnN3ZXJzIiwiZm9yRWFjaCIsImkiLCIkcmFkaW9zSGVyZSIsInZhbCIsInN1Ym1pdEFuc3dlciIsImUiLCJjaGVja0Fuc3dlciIsImNvbnNvbGUiLCJhdWRpbzUiLCJsb2ciLCJwbGF5ZXJBbnN3ZXIiLCJhdWRpbzYiLCIkcGxhY2VJbWFnZSIsIiRuZXh0IiwiJGNvcnJlY3RJbWFnZSIsImFwcGVuZCIsImNvcnJlY3RJbWFnZSIsIiRmb3JtIiwiQXVkaW8iLCIkYnV0dG9uIiwiJGluc3RydWN0aW9ucyIsIm9uIiwibmV4dFF1ZXN0aW9uIl0sIm1hcHBpbmdzIjoiWUFBQUEsR0FBQSxXQTZDSSxRQUFJQyxHQUFPQyxHQUtUQyxRQUFBQSxLQUNBQyxHQUFBQSxHQUFZQyxFQUFBQSxDQUNaRixLQUNFRyxFQUFBQSxLQUFVQyxFQUFBQyxXQUFWLEtBQUFMLEVBQUEsR0FBQSxJ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LEVBQUFBLEVBQWdCaEUsZUFDaEJnQixFQUFBQSxFQUFBQSxRQUNBSSxFQUFlcEIsRUFBQSxlQUNmMEIsRUFBTjFCLEVBQUEsaUJBQ013RCxFQUFBQSxFQUFBQSxVQUNBRSxFQUFBQSxFQUFBQSxRQU1GMUIsRUFBbUIsS0FDbkJzQixFQUFlLEtBQ2ZyQixFQUFnQixLQUNoQlgsRUFBZSxFQUNmaEIsRUFBVSxJQUdkbUIsR0FBT0csT0FwQ1RtQyxFQUFBRSxHQUFBLFFBQUExQyxHQXlLRXNDLEVBQU1JLEdBQUcsU0FBVWpCLEdBQ25CUyxFQUFNUSxHQUFHLFFBQVNDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGdsb2JhbCBhbGxRdWVzdGlvbnMgKi9cblxuJCgoKSA9PiB7XG5cbiAgY29uc3QgYXVkaW8xID0gbmV3IEF1ZGlvKCdzb3VuZHMvZ2FuZ3N0YXNQYXJhZGlzZS5tNGEnKTtcbiAgY29uc3QgYXVkaW8yID0gbmV3IEF1ZGlvKCdzb3VuZHMvZXVyb3BhLm00YScpO1xuICBjb25zdCBhdWRpbzMgPSBuZXcgQXVkaW8oJ3NvdW5kcy9mZWVsR29vZC5tNGEnKTtcbiAgY29uc3QgYXVkaW80ID0gbmV3IEF1ZGlvKCdzb3VuZHMvb25lTW9yZVRpbWUubTRhJyk7XG4gIGNvbnN0IGF1ZGlvNSA9IG5ldyBBdWRpbygnc291bmRzL2Rpbmcud2F2Jyk7XG4gIGNvbnN0IGF1ZGlvNiA9IG5ldyBBdWRpbygnc291bmRzL25vcGUubXA0Jyk7XG5cbiAgY29uc3QgJHJhZGlvc0hlcmUgPSAkKCdpbnB1dFt0eXBlPXJhZGlvXScpO1xuXG4gIGNvbnN0ICRsYWJlbHNIZXJlID0gJCgnbGFiZWwnKTtcbiAgY29uc3QgJHF1ZXN0aW9uSGVyZSA9JCgnLnF1ZXN0aW9uSGVyZScpO1xuICBjb25zdCAkZm9ybUVmZmVjdCA9ICQoJyNmb3JtJyk7XG4gIGNvbnN0ICRmb3JtID0gJCgnZm9ybScpO1xuICBjb25zdCAkaGVhZGluZyA9ICQoJyNoZWFkaW5nJyk7XG4gIGNvbnN0ICRidXR0b24gID0gJCgnLnBsYXknKTtcbiAgY29uc3QgJG5leHQgPSAkKCcjbmV4dCcpO1xuICBjb25zdCAkaW5zdHJ1Y3Rpb25zID0gJCgnI2luc3RydWN0aW9ucycpO1xuICBjb25zdCAkZ2FtZU92ZXIgPSAkKCcjZ2FtZS1vdmVyJyk7XG4gIGNvbnN0ICRnYW1lQm9hcmQgPSAkKCcjZ2FtZS1ib2FyZCcpO1xuICBjb25zdCAkd2luID0gJCgnI3dpbicpO1xuICBjb25zdCAkcGxhY2VJbWFnZSA9ICQoJyNwbGFjZUltYWdlJyk7XG4gIGNvbnN0ICRjb3JyZWN0SW1hZ2UgPSAkKCcjY29ycmVjdEltYWdlJyk7XG4gIGNvbnN0ICR0aW1lciA9ICQoJyN0aW1lcicpO1xuICBjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcblxuXG5cbiAgbGV0IHF1ZXN0aW9uU2VsZWN0ZWQgPSBudWxsO1xuICBsZXQgcGxheWVyQW5zd2VyID0gbnVsbDtcbiAgbGV0IGNvcnJlY3RBbnN3ZXIgPSBudWxsO1xuICBsZXQgY3VycmVudFJvdW5kID0gMDtcbiAgbGV0IHRpbWVySWQgPSBudWxsO1xuXG5cbiAgYXVkaW8xLnBsYXkoKTtcblxuXG4gIC8vZ2FtZSB0aW1lciB0aGF0IHJlc2V0cyBlYWNoIHRpbWUgcXVlc3Rpb25zIGFuZCBhc3dlcnMgYXJlIGdlbmVyYXRlZFxuXG4gIGZ1bmN0aW9uIHRpbWVyKG1pbnV0ZXMpIHtcbiAgICB2YXIgc2Vjb25kcyA9IDYwO1xuICAgIHZhciBtaW5zID0gbWludXRlcztcbiAgICBjbGVhclRpbWVvdXQodGltZXJJZCk7IC8vIHN0b3AgdGhlIHRpbWVyXG5cbiAgICBmdW5jdGlvbiB0aWNrKCkge1xuICAgICAgdmFyIGN1cnJlbnRNaW51dGVzID0gbWlucy0xO1xuICAgICAgc2Vjb25kcy0tO1xuICAgICAgJHRpbWVyLmh0bWwoY3VycmVudE1pbnV0ZXMudG9TdHJpbmcoKSArICc6JyArIChzZWNvbmRzIDwgMTAgPyAnMCcgOiAnJykgKyBTdHJpbmcoc2Vjb25kcykpO1xuICAgICAgaWYoIHNlY29uZHMgPiAwICkge1xuICAgICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aWNrLCAxMDAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0b3JhZ2UoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGljaygpO1xuICB9XG5cblxuLy9yZXNldCBnYW1lIGJ5IGRpc3BsYXlpbmcgZ2FtZS1vdmVyIGRpdipcblxuICBmdW5jdGlvbiBzdG9yYWdlKCkge1xuICAgICRib2R5LnJlbW92ZUNsYXNzKCdzdGFydCcpO1xuICAgICRoZWFkaW5nLmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICAkYm9keS5hZGRDbGFzcygnbG9zZScpO1xuICAgICRmb3JtRWZmZWN0LmFkZENsYXNzKCdodnItcHVsc2UnKTtcbiAgICAkZ2FtZU92ZXIucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICAgIGF1ZGlvMi5wYXVzZSgpO1xuICAgIGF1ZGlvNC5wbGF5KCk7XG4gICAgJGdhbWVCb2FyZC5hZGRDbGFzcygnaGlkZGVuJyk7XG5cbiAgICBjdXJyZW50Um91bmQgPSAwO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xuICAgICRpbnN0cnVjdGlvbnMuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgICRmb3JtRWZmZWN0LnJlbW92ZUNsYXNzKCdodnItcHVsc2UnKTtcbiAgICAkaGVhZGluZy5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gICAgJGJvZHkuYWRkQ2xhc3MoJ3N0YXJ0Jyk7XG4gICAgJGJvZHkucmVtb3ZlQ2xhc3MoJ3dpbicpO1xuICAgICRib2R5LnJlbW92ZUNsYXNzKCdsb3NlJyk7XG4gICAgYXVkaW8xLnBhdXNlKCk7XG4gICAgYXVkaW80LnBhdXNlKCk7XG4gICAgJGdhbWVPdmVyLmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICAkd2luLmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICBhdWRpbzMucGF1c2UoKTtcbiAgICAkZ2FtZUJvYXJkLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgICAkaGVhZGluZy5odG1sKCdRdWVzdGlvbiAnICsgKGN1cnJlbnRSb3VuZCArIDEpKyBgL2AgKyBgMTBgKTtcbiAgICBhdWRpbzIucGxheSgpO1xuICAgIGdlbmVyYXRlUXVlc3Rpb25zQW5zd2VycygpO1xuICB9XG5cbiAgLy9mdW5jdGlvbiBnZW5lcmF0ZSBxdWVzdGlvbnMgJiBhbnN3ZXJzXG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGVRdWVzdGlvbnNBbnN3ZXJzKCkge1xuICAgIHRpbWVyKDEpO1xuICAgICRmb3JtLmdldCgwKS5yZXNldCgpO1xuICAgIHZhciByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSphbGxRdWVzdGlvbnMubGVuZ3RoKTtcbiAgICBxdWVzdGlvblNlbGVjdGVkID0gYWxsUXVlc3Rpb25zLnNwbGljZShyYW5kb21JbmRleCwgMSlbMF07XG4gICAgY29ycmVjdEFuc3dlciA9IHF1ZXN0aW9uU2VsZWN0ZWQuY29ycmVjdEFuc3dlcjtcblxuICAgICRxdWVzdGlvbkhlcmUuaHRtbChxdWVzdGlvblNlbGVjdGVkLnF1ZXN0aW9uKTtcblxuICAgICRsYWJlbHNIZXJlLmVhY2goKCkgPT4ge1xuICAgICAgLy8gY29uc3QgJGxhYmVsVG9OYW1lID0gJGxhYmVsc0hlcmUuZXEoaW5kZXgpO1xuICAgICAgcXVlc3Rpb25TZWxlY3RlZC5hbnN3ZXJzLmZvckVhY2goKGFuc3dlcnMsIGkpID0+IHtcbiAgICAgICAgJGxhYmVsc0hlcmUuZXEoaSkuaHRtbChhbnN3ZXJzKTtcbiAgICAgICAgJHJhZGlvc0hlcmUuZXEoaSkudmFsKGFuc3dlcnMpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuLy9mdW5jdGlvbiBzdWJtaXQgYW5zd2VyXG5cbiAgZnVuY3Rpb24gc3VibWl0QW5zd2VyKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgcGxheWVyQW5zd2VyID0gJCgnaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCcpLnZhbCgpO1xuXG4gICAgY2hlY2tBbnN3ZXIocXVlc3Rpb25TZWxlY3RlZCk7XG4gICAgY29uc29sZS5sb2coYHBsYXllciBhbnN3ZXJzICR7cGxheWVyQW5zd2VyfSB3aGVuIHRoZSBhbnN3ZXIgc2hvdWxkIGJlICR7Y29ycmVjdEFuc3dlcn1gKTtcbiAgICBpZiAocGxheWVyQW5zd2VyID09PSBjb3JyZWN0QW5zd2VyKSB7XG4gICAgICBhdWRpbzUucGxheSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhdWRpbzYucGxheSgpO1xuICAgIH1cbiAgfVxuXG4vL2Z1bmN0aW9uIGNoZWNrIGFuc3dlclxuXG4gIGZ1bmN0aW9uIGNoZWNrQW5zd2VyKHF1ZXN0aW9uU2VsZWN0ZWQpIHtcbiAgICBpZiAocGxheWVyQW5zd2VyID09PSBjb3JyZWN0QW5zd2VyKSB7XG4gICAgICAkZm9ybS5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgICAkcGxhY2VJbWFnZS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gICAgICAkbmV4dC5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gICAgICAkY29ycmVjdEltYWdlLmFwcGVuZChgPGltZyBzcmM9JHtxdWVzdGlvblNlbGVjdGVkLmNvcnJlY3RJbWFnZX0+YCk7XG4gICAgICAkaGVhZGluZy5odG1sKHF1ZXN0aW9uU2VsZWN0ZWQuZGVzY3JpcHRpb24pO1xuICAgICAgY3VycmVudFJvdW5kID0gY3VycmVudFJvdW5kICsgMTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RvcmFnZSgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG5leHRRdWVzdGlvbigpIHtcbiAgICAkY29ycmVjdEltYWdlLmVtcHR5KCk7XG4gICAgJHBsYWNlSW1hZ2UuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgICRuZXh0LmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICAkZm9ybS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gICAgJGhlYWRpbmcuaHRtbCgnUXVlc3Rpb24gJyArIChjdXJyZW50Um91bmQgKyAxKSArIGAvYCArIGAxMGApO1xuXG4gICAgaWYgKGN1cnJlbnRSb3VuZCA+PSAxMCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpOyAvLyBzdG9wIHRoZSB0aW1lclxuICAgICAgYXVkaW8yLnBhdXNlKCk7XG4gICAgICBhdWRpbzMucGxheSgpO1xuICAgICAgJGJvZHkucmVtb3ZlQ2xhc3MoJ3N0YXJ0Jyk7XG4gICAgICAkYm9keS5hZGRDbGFzcygnd2luJyk7XG4gICAgICAkaGVhZGluZy5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgICAkZm9ybUVmZmVjdC5hZGRDbGFzcygnaHZyLXB1bHNlJyk7XG4gICAgICAkZ2FtZUJvYXJkLmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICAgICRoZWFkaW5nLmh0bWwoJ0NvbmdyYXRzIScpO1xuICAgICAgJHdpbi5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG5cbiAgICAgIGN1cnJlbnRSb3VuZCA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbmVyYXRlUXVlc3Rpb25zQW5zd2VycygpO1xuICAgIH1cbiAgfVxuXG4gICRidXR0b24ub24oJ2NsaWNrJywgc3RhcnRHYW1lKTtcbiAgJGZvcm0ub24oJ3N1Ym1pdCcsIHN1Ym1pdEFuc3dlcik7XG4gICRuZXh0Lm9uKCdjbGljaycsIG5leHRRdWVzdGlvbik7XG5cbn0pO1xuIl19
