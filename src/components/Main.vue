<template>
    <main class="main">
        <div class="main-bgGrad"></div>

        <div class="main-t">
            <table class="main-t-table">
                <thead>
                    <tr class="main-t-table-row">
                        <th class="main-t-table-row--header">Name</th>
                        <th class="main-t-table-row--header">Price</th>
                        <th class="main-t-table-row--header main-t-table-row--header_desctop">Market Cap</th>
                        <th class="main-t-table-row--header main-t-table-row--header_desctop">Volume(24Hr)</th>
                    </tr>
                </thead>
                <tr class="main-t-table-row" v-for="crypto in cryptoData.slice(0, 15)">
                    <td class="main-t-table-row--data">{{crypto.id}}</td>
                    <td class="main-t-table-row--data">{{Number.parseFloat(crypto.priceUsd).toFixed(2)}}</td>
                    <td class="main-t-table-row--data main-t-table-row--header_desctop">{{Number.parseFloat(crypto.marketCapUsd).toFixed(2)}}</td>
                    <td class="main-t-table-row--data main-t-table-row--header_desctop">{{Number.parseFloat(crypto.volumeUsd24Hr).toFixed(2)}}</td>
                </tr>
            </table>
            
        </div>

        <div class="main-ttl" aria-hidden='true'>
            <div class="main-ttl-title">
                <p class="main-ttl-title-header">Name</p>
                <p class="main-ttl-title-header">Price</p>
                <p class="main-ttl-title-header main-ttl-title-header_desctop">Market Cap</p>
                <p class="main-ttl-title-header main-ttl-title-header_desctop">Volume(24Hr)</p>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
.main{
    height: calc(100% - 80px);
}

.main-bgGrad{
    height: 100px;
    background-image: linear-gradient( 109.6deg,  rgba(14,11,56,1) 11.2%, rgba(239,37,37,1) 91.1% );
}

.main-t{
    position: relative;
    bottom: 50px;
    display: flex;
    justify-content: center;
    height: calc(100% - 80px);
    overflow: scroll;
}

.main-t-table{
    width: 85%;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
}

.main-t-table-row--header{
    padding: 5px;
    width: 20%;
    text-align: left;
    border-bottom: 2px solid rgba(14,11,56,1);
}
.main-t-table-row--data{
    padding: 5px;
    border-bottom: 2px solid rgba(14,11,56,1);
}

.main-t-table-row--header_desctop{
    border-bottom: 2px solid rgba(239,37,37,1);
}

.main-ttl {
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    top: -94%;

}

.main-ttl-title {
    display: flex;
    width: 85%;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    border: 4px solid white;
}

.main-ttl-title-header{
    width: 25%;
    margin: 0;
    font-weight: bold;
}



@media all and (max-width: 425px) {
    .main-bgGrad{
        height: 50px;
    }

    .main-t{
        position: static;
        height: 100%;
    }
    .main-t-table{
        width: 100%;
        background-color: #fff;
        border-radius: 0;
        box-shadow: 0 0 0px rgba(0,0,0,0);
        height: 100%;
    }

    .main-t-table-row--header{
        font-size: 25px;
        padding: 5px;
        width: 50%;
        text-align: left;
    }

    .main-t-table-row--data{
        font-size: 20px;
    }

    .main-t-table-row--header_desctop{
        display: none;
    }

    .main-ttl {
        width: 100%;
        display: flex;
        justify-content: center;
        position: relative;
        top: -99.99%;
    }

    .main-ttl-title {
        display: flex;
        width: 100%;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
        border: 4px solid white;
    }

    .main-ttl-title-header{
        width: 50%;
        margin: 0;
        padding: 5px;
    }

    .main-ttl-title-header_desctop{
        display: none;
    }
}

</style>

<script>
import axios from 'axios';
export default {
    data: () => ({
        cryptoData: [],
        errors: []
    }),

    created() {
        axios.get(`https://api.coincap.io/v2/assets`)
        .then(response => {
            // console.log(response.data.data)
            this.cryptoData = response.data.data
        })
        .catch(e => {
            this.errors.push(e)
        })
    }
}
</script>

