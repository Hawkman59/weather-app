
class Formatter{

    static getNameOfDay(utcTime){
        var d = new Date(utcTime * 1000)

        var weekday = new Array(7);
        weekday[0] = "So";
        weekday[1] = "Mo";
        weekday[2] = "Di";
        weekday[3] = "Mi";
        weekday[4] = "Do";
        weekday[5] = "Fr";
        weekday[6] = "Sa";

        return weekday[d.getDay()]
    }

    static formatTime(time){
        var d = new Date(time * 1000)
        if (d.getHours() < 10) {
            return "0" + d.getHours() + ":00";
        }
        return d.getHours() + ":00";
    }

    static formatTemp(temp){
        return Math.floor( temp ) + " °C"
    }

    static formatDate(utc){
        var d = new Date(utc * 1000)

        return d.toLocaleString('de-DE')
    }

    static formatPop(pop){

        return pop * 10 + "%"
    }
}
export default Formatter