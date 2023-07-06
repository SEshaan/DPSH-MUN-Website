<script>
    // @ts-nocheck
    import { onMount } from 'svelte';

const allocationsMatrix =
    'https://docs.google.com/spreadsheets/d/1Pl-6l-04mVm6uD-WBpsZzHh7EHtrDj1XxkguzIDywAs/';

onMount(() => {
    var e = document.querySelector('#com_sel');
    e?.addEventListener('change', () => {
        var text = e.value;
        document.getElementById('frame').contentWindow.postMessage(text, '*');
        load_com(text);
        e.value=text
    });
    var f = document.querySelector('#tab_sel');
    f?.addEventListener('change', () => {
        var text = f.value;
        current_row = rows[f.value];
        load_com(text);
        if (text in ["disec","sc","unhrc","nato","imf"]){
            document.getElementById('frame').contentWindow.postMessage(text, '*');
        }
    });
    load_com('disec');
});

var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: {
        'Content-Type': 'application/json'
    }
};

/**
 * @type {any[]}
 */
let committees = [];

/**
 * @type {string}
 */

var data;

/**
 * @param {string} x
 */
function load_com(x) {
    if (getCache(x)) return data_update(getCache(x));
    fetch(`/api/allocations?c=${x.toLowerCase()}`, requestOptions)
        .then((res) => res.json())
        .then(data_update)
        .then((data) => updateCache({ com: x, data }))
        .catch(console.error);
}

const getCache = (commitee) => JSON.parse(sessionStorage?.getItem(commitee)) ?? null;
function updateCache({ com, data }) {
    sessionStorage.setItem(com, JSON.stringify(data));
    return data;
}
function data_update(x) {
    committees = x['data'];
    return x;
}

let rows = {
    disec: {
        labels: ['S.No', 'Country', 'Delegate', 'Class'],
        db_row: ['id', 'Country', 'Allocation', 'Section']
    },
    unsc: {
        labels: ['S.No', 'Country', 'Delegate', 'Class'],
        db_row: ['id', 'Country', 'Allocation', 'Section']
    },
    unhrc: {
        labels: ['S.No', 'Country', 'Delegate', 'Class'],
        db_row: ['id', 'Country', 'Allocation', 'Section']
    },
    nato: {
        labels: ['S.No', 'Country', 'Delegate', 'Class'],
        db_row: ['id', 'Country', 'Allocation', 'Section']
    },
    imf: {
        labels: ['S.No', 'Country', 'Delegate', 'Class'],
        db_row: ['id', 'Country', 'Allocation', 'Section']
    },
    lk: {
        labels: ['S.No', 'Leader', 'Party', 'Name', 'Section'],
        db_row: ['id', 'politician', 'Party', 'Allocation', 'Section']
    },
    ip: {
        labels: ['S.No', 'Committee', 'Name', 'Section'],
        db_row: ['id', 'Committee', 'Allocation', 'Section']
    }
};

let current_row = rows['disec'];
</script>

<select name="" id="tab_sel">
    <option value="ip">IP</option>
    <option value="lk">LK</option>
</select><br /><br />
<table>
    <tbody>
        <tr class="head"
            ><th>{current_row['labels'][0]}</th><th>{current_row['labels'][1]}</th><th
                >{current_row['labels'][2]}</th
            ><th>{current_row['labels'][3]}</th>{#if current_row['labels'][4]}<th
                    >{current_row['labels'][4]}</th
                >{/if}</tr
        >
        {#each committees as i}
            <tr
                ><td>{i[current_row.db_row[0]]}</td><td>{i[current_row.db_row[1]]}</td><td
                    >{i[current_row.db_row[2]]}</td
                ><td>{i[current_row.db_row[3]]}</td>{#if current_row.db_row[4]}<td
                        >{i[current_row.db_row[4]]}</td
                    >{/if}</tr
            >
        {/each}
    </tbody>
</table>