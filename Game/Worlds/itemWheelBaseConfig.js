export default itemsWheelConfig = {
    items: [
        {
            weight: 1.0, itemIdx: 0, totalItems: 4, items:
                [['defenseUp', 'add defense', { key: 'defense', value: 0.1, itemNum: 1 }],
                ['defenseUp', 'more defense', { key: 'defense', value: 0.2, itemNum: 2 }],
                ['defenseUp', 'even more defense', { key: 'defense', value: 0.5, itemNum: 3 }],
                ['defenseUp', 'even more defense', { key: 'defense', value: 1.0, itemNum: 4 }]]
        },
        {
            weight: 0.7, itemIdx: 0, totalItems: 5, items:
                [['HealthPerLevel', 'health per level', { key: 'plusHealthLevel', value: 0.2, itemNum: 1 }],
                ['HealthPerLevel', 'more health per level', { key: 'plusHealthLevel', value: 0.5, itemNum: 2 }],
                ['HealthPerLevel', 'more health per level', { key: 'plusHealthLevel', value: 1.0, itemNum: 3 }],
                ['HealthPerLevel', 'more health per level', { key: 'plusHealthLevel', value: 1.2, itemNum: 4 }],
                ['HealthPerLevel', 'more health per level', { key: 'plusHealthLevel', value: 2.0, itemNum: 5 }]],
        },
        {
            weight: 1.0, itemIdx: 0, totalItems: 3, items:
                [['jumpUp', 'more jumps', { key: 'maxNumJumps', value: 1, itemNum: 1 }],
                ['jumpUp', 'more jumps', { key: 'maxNumJumps', value: 1, itemNum: 2 }],
                ['jumpUp', 'more jumps', { key: 'maxNumJumps', value: 1, itemNum: 3 }]],
        },
        {
            weight: 0.9, itemIdx: 0, totalItems: 6, items:
                [['moneyUp', 'more money', { key: 'earningsMultiplier', value: 2, itemNum: 1 }],
                ['moneyUp', 'more money', { key: 'earningsMultiplier', value: 2, itemNum: 2 }],
                ['moneyUp', 'more money', { key: 'earningsMultiplier', value: 1.3, itemNum: 3 }],
                ['moneyUp', 'more money', { key: 'earningsMultiplier', value: 1.2, itemNum: 4 }],
                ['moneyUp', 'more money', { key: 'earningsMultiplier', value: 1.4, itemNum: 5 }],
                ['moneyUp', 'more money', { key: 'earningsMultiplier', value: 2, itemNum: 6 }]],
        },
        {
            weight: 1.0, itemIdx: 0, totalItems: 3, items:
                [['speedUp', 'run faster', { key: 'moveSpeed', value: 1, itemNum: 1 }],
                ['speedUp', 'run faster', { key: 'moveSpeed', value: 1, itemNum: 2 }],
                ['speedUp', 'run faster', { key: 'moveSpeed', value: 1, itemNum: 3 }]],
        },
        {
            weight: 1.0, itemIdx: 0, totalItems: 4, items:
                [['HealthPerKill', 'health per kill', { key: 'plusHealthKill', value: 0.05, itemNum: 1 }],
                ['HealthPerKill', 'more health per kill', { key: 'plusHealthKill', value: 0.1, itemNum: 2 }],
                ['HealthPerKill', 'more health per kill', { key: 'plusHealthKill', value: 0.2, itemNum: 3 }],
                ['HealthPerKill', 'more health per kill', { key: 'plusHealthKill', value: 0.5, itemNum: 4 }]],
        },
        {
            weight: 0.9, itemIdx: 0, totalItems: 4, items:
                [['bulletFireRate', 'fire rate increase', { key: 'shootTime', value: 0.1, itemNum: 1 }],
                ['bulletFireRate', 'fire rate increase', { key: 'shootTime', value: 0.1, itemNum: 2 }],
                ['bulletFireRate', 'fire rate increase', { key: 'shootTime', value: 0.1, itemNum: 3 }],
                ['bulletFireRate', 'fire rate increase', { key: 'shootTime', value: 0.2, itemNum: 4 }]],
        },
        {
            weight: 0.8, itemIdx: 0, totalItems: 3, items:
                [['speedBullets', 'speedy bullets', { key: 'bulletSpeed', value: 2, itemNum: 1 }],
                ['speedBullets', 'speedier bullets', { key: 'bulletSpeed', value: 2, itemNum: 2 }],
                ['speedBullets', 'speedier bullets', { key: 'bulletSpeed', value: 1, itemNum: 3 }]],
        },
        {
            weight: 0.3, itemIdx: 0, totalItems: 4, items:
                [['bulletDamage', 'stronger bullets', { key: 'damage', value: 0.3, itemNum: 1 }],
                ['bulletDamage', 'stronger bullets', { key: 'damage', value: 0.4, itemNum: 2 }],
                ['bulletDamage', 'stronger bullets', { key: 'damage', value: 0.5, itemNum: 3 }],
                ['bulletDamage', 'stronger bullets', { key: 'damage', value: 1.0, itemNum: 4 }]],
        },
        {
            weight: 0.7, itemIdx: 0, totalItems: 4, items:
                [['homing', 'homing bullets', { key: 'homing', value: 0.5, itemNum: 1 }],
                ['homingBetter', 'better homing bullets', { key: 'homing', value: 2.0, itemNum: 2 }],
                ['homingBetter', 'better homing bullets', { key: 'homing', value: 4.0, itemNum: 3 }],
                ['homingBetter', 'perfect homing bullets', { key: 'homing', value: 10.0, itemNum: 4 }]],
        },
        {
            weight: 0.7, itemIdx: 0, totalItems: 1, items:
                [['piercingShot', 'piercing bullets', { key: 'piercingShot', value: 1, itemNum: 1 }]],
        },
        {
            weight: 0.6, itemIdx: 0, totalItems: 3, items:
                [['bouncyBullets', 'bouncy bullets', { key: 'numBounces', value: 2, itemNum: 1 }],
                ['bouncyBullets', 'more bounces per bullet', { key: 'numBounces', value: 2, itemNum: 2 }],
                ['bouncyBullets', 'more bounces per bullet', { key: 'numBounces', value: 2, itemNum: 3 }]],
        },
        {
            weight: 0.5, itemIdx: 0, totalItems: 3, items:
                [['spreadBullets', 'spread bullets', { key: 'spreadBullets', value: 1, itemNum: 1 }],
                ['spreadBullets', 'more spread bullets', { key: 'spreadBullets', value: 2, itemNum: 2 }],
                ['spreadBullets', 'more spread bullets', { key: 'spreadBullets', value: 3, itemNum: 3 }]],
        },
        {
            weight: 0.25, itemIdx: 0, totalItems: 3, items:
                [['extraBullet', 'extra bullet', { key: 'numBullets', value: 1, itemNum: 1 }],
                ['extraBullet', 'extra bullet', { key: 'numBullets', value: 1, itemNum: 2 }],
                ['extraBullet', 'extra bullet', { key: 'numBullets', value: 1, itemNum: 3 }]],
        },
    ]
}