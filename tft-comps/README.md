https://developer.riotgames.com/docs/tft#static-data_current-set

## Hierarchy

### Breakdown - Comp Detail page

- `CompID` -> CompDetail
- CompDetail finds comp information by id and stores it in state (`comp`)
Minimum interface is:
```
DetailComp {
    title: string;
    earlyGame: string[]; // champion ids
    midGame: string[];   // champion ids
    lateGame: string[];  // champion ids
}
```

- Render title of comp
- Render `LateGameFormationList` which displays a image and name per champion in a grid
    - Fetch detail info for champion by id
    - Fetch image path for champion
