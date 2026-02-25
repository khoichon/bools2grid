function display_led(grid: any) {
    /** 
    Directly display the boolean grid list to the LED directly. 
    @param grid Grid of 5x5 booleans made using lists
    
    
 */
    for (let x = 0; x < 5; x++) {
        for (let y = 0; y < 5; y++) {
            if (grid[x][y]) {
                led.plot(x, y)
            } else {
                led.unplot(x, y)
            }
            
        }
    }
}

display_led([[true, true, true, true, true]])
