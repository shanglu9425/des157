$(document).ready(function() {
    var audioCtx = new(window.AudioContext || window.webkitAudioContext)();
    var audioElement = document.getElementById('audioElement');
    var audioSrc = audioCtx.createMediaElementSource(audioElement);
    var analyser = audioCtx.createAnalyser();

    // Bind our analyser to the media element source.
    audioSrc.connect(analyser);
    audioSrc.connect(audioCtx.destination);
    var frequencyData = new Uint8Array(55);

    var svgHeight = '300';
    var svgWidth = '600';
    var barPadding = '6';
    var paddingSide = '50';

    function createSvg(parent, height, width) {
        return d3.select(parent).append('svg').attr('height', height).attr('width', width);
    }

    var svg = createSvg(' .wave', svgHeight, svgWidth);

    // Create our initial D3 chart.
    svg.selectAll('rect')
        .data(frequencyData)
        .enter()
        .append('rect')
        .attr('x', function(d, i) {
            return i * (svgWidth / frequencyData.length);
        })
        .attr('width', svgWidth / frequencyData.length - barPadding);

    function renderChart() {
        requestAnimationFrame(renderChart);

        // Copy frequency data to frequencyData array.
        analyser.getByteFrequencyData(frequencyData);

        // Update d3 chart with new data.
        svg.selectAll('rect')
            .data(frequencyData)
            .attr('y', function(d) {
                return svgHeight - d;
            })
            .attr('height', function(d) {
                return d;
            })
            .attr('fill', function(d) {
                return 'rgb(255, 255, 255)';
            });
    }

    // Run the loop
    renderChart();

    $(function() {
        $('#start').on('click', function() {
            //alert('hello');
            $('.tape').addClass('tapeAnimate');
            $('.circle').addClass('spin');
            $('.wave').addClass('opacity');

        });
    });

    $(function() {
        $('#stop').on('click', function() {
            //alert('hello');
            $('.tape').removeClass('tapeAnimate');
            $('.circle').removeClass('spin');
        });
    });


});