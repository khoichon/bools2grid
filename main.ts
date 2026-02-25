/**
 * LED Grid Tools
 */
//% color=#FFAA00 icon="\uf00a" block="LED Tools"
namespace ledgrid {

    /**
     * Directly display a 5x5 boolean grid to the LED screen
     * @param grid 5x5 list of booleans
     */
    //% block="display LED grid %grid"
    //% weight=100
    export function displayLed(grid: boolean[][]): void {

        for (let x = 0; x < 5; x++) {
            for (let y = 0; y < 5; y++) {

                if (grid[y][x]) {
                    led.plot(x, y)
                } else {
                    led.unplot(x, y)
                }

            }
        }

    }
}
