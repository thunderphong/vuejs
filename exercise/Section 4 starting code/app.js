new Vue({
    el: "#app",
    data: {
        game: true,
        myHealth: 100,
        monsterHealth: 100,
        // class
        health: 'healthbar',
        textCenter: 'text-center',
        message: [],

    },
    computed: {
        displayMyHealth: function(){
            return this.myHealth + '%';
        },
        displayMonsterHealth: function(){
            return this.monsterHealth + '%';
        },
    },
    methods: {
        startGame: function(){
            this.game = !this.game;
            this.myHealth = 100;
            this.monsterHealth = 100;
            this.message = [];
        },
        calculateDamage: function() { return Math.floor((Math.random() * 10) + 1)},
        check: function() { 
            if (this.monsterHealth < 1) this.alert('You win');
            else if (this.myHealth < 1) this.alert('You lose');
        },
        myAttack: function(){
            let attackPoint = this.calculateDamage();
            this.monsterHealth -= attackPoint;
            return 'PLAYER HITS MONSTER FOR ' + attackPoint;
        },
        monsterAttack: function(){
            let attackPoint = this.calculateDamage();
            this.myHealth -= attackPoint;
            return 'MONSTER HITS PLAYER FOR ' + attackPoint;
        },
        attack: function(){
            const playerTurn = this.myAttack();
            this.check();
            const monsterTurn = this.monsterAttack();
            this.message.push({ playerTurn, monsterTurn });
        },
        specialAttack: function(){
            this.myAttack();
            this.myAttack();
            this.check();
            this.monsterAttack();
            this.monsterAttack();
            this.message.push({ playerTurn: '', monsterTurn: '', bigTurn: 'BIG TURNNNNN' });
            this.check();
        },
        heal: function(){
            let healPoint = this.calculateDamage();
            if (this.myHealth + healPoint > 100) this.myHealth = 100;
                else this.myHealth += healPoint;
            if (this.monsterHealth + healPoint > 100) this.monsterHealth = 100;
                else this.monsterHealth += healPoint + 2;
            this.message.push({ 
                playerTurn: 'PLAYER HEAL FOR ' + healPoint,
                monsterTurn: 'MONSTER HEAL FOR ' + (healPoint + 2)
            })
        },
        alert: function(value){
            const r = confirm(value);
            this.startGame();
        }
    }
})