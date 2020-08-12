<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: ["labels", "datasets"],
  data: function () {
    return {
      chartSettings: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          fullWidth: false,
          labels: {
            boxWidth: 20,
            fontColor: "#000"
          },
        },
        layout: {
          padding: {
            top: 20,
            left: 20,
            bottom: 20,
            right: 20,
          }
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: true,
                drawOnChartArea: false,
                color: "rgba(255, 255, 255, .5)",
                zeroLineColor: "rgba(255, 255, 255, 1)",
              },
              ticks: {
                autoSkip: true,
                fontColor: "#000",
                fontSize: 12
              },
              scaleLabel: {
                display: true,
                fontColor: "#000",
                labelString: "年",
              },
            },
          ],
          yAxes: [
            {
              id: "yAxis_1",
              type: "linear",
              gridLines: {
                display: true,
                drawOnChartArea: true,
                color: "rgba(0, 0, 0, .5)",
                zeroLineColor: "rgba(0, 0, 0, 1)",
              },
              scaleLabel: {
                display: true,
                fontColor: "#000",
                labelString: "万円"
              },
              ticks: {
                autoSkip: true,
                fontColor: "#000",
                fontSize: 14,
                // min: 0,
                // max: 5000,
              },
            },
          ],
        },
        annotation: {
          annotations: [
            {
              type: "line",
              mode: "vertical",
              scaleID: "x-axis-0",
              value: "2035",
              borderColor: "black",
              label: {
                content: "ローン完済",
                enabled: true,
                position: "top"
              }
            },
          ],
        }

      },
    }
  },
  methods: {
    render() {
      this.renderChart(
        {
          labels: this.labels,
          datasets: this.datasets,
        },
        this.chartSettings,
      )
    }
  },
  mounted () {
    this.$refs.canvas.height = 800; //データ数に応じて高さ指定
    this.render()
  },
  watch: {
    labels() {
      this.render()
    },
    datasets() {
      this.render()
    },
  },
}
</script>