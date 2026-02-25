def display_led(grid: list[list[bool]]):
    """
    Directly display the boolean grid list to the LED directly. 
    @param grid Grid of 5x5 booleans made using lists
    
    """
    for x in range(5):
        for y in range(5):
            if grid[x][y]:
                led.plot(x, y)
            else:
                led.unplot(x, y)

