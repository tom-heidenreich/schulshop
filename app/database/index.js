var bufferedDB = undefined

const data = {
    "products": [
        {"id": "8ee34078-149b-41ca-bde3-833abe80dc86", "name": "A4 Heft liniert mit Rand", "thumbnail": "/content/thumbnail/82b2074f-1288-4b5d-8ae7-4f90b3a47933.png", "price": "12.99"},
        {"id": "369a015f-2f26-49d9-bfd0-a2f84556fbb8", "name": "A4 Heft liniert ohne Rand", "thumbnail": "/content/thumbnail/82b2074f-1288-4b5d-8ae7-4f90b3a47933.png", "price": "12.99"},
        {"id": "e326e3aa-a781-40da-bf08-165f08b11d47", "name": "A4 Heft kariert mit Rand", "thumbnail": "/content/thumbnail/d6b75482-6a9c-4348-9269-ed28ab2fca9f.png", "price": "12.99"},
        {"id": "d90de1d8-8583-4970-b171-529c2b4dca8f", "name": "A4 Heft kariert ohne Rand", "thumbnail": "/content/thumbnail/d6b75482-6a9c-4348-9269-ed28ab2fca9f.png", "price": "12.99"},
        {"id": "b3e35f1e-e467-4a07-965d-0389963d2875", "name": "Blauer Umschlag A4", "thumbnail": "/content/thumbnail/695c8eac-dfc8-4d80-bd3f-5148aabbb60f.png", "price": "0.50"},
        {"id": "c01a5f89-7f65-459d-8197-96c0dbd8ff50", "name": "Rosa Umschlag A4", "thumbnail": "/content/thumbnail/8bb4dae9-a344-47f7-8d76-c3fc486a9732.png", "price": "0.50"},
        {"id": "fc15739a-5272-49c2-8d97-95712b3c73a0", "name": "Grüner Umschlag A4", "thumbnail": "/content/thumbnail/1f1abda5-d5b0-4ea5-82dc-78e6ee489249.png", "price": "0.50"},
        {"id": "a0cf24c4-8822-45a1-af09-d95c48b2290c", "name": "Gelber Umschlag A4", "thumbnail": "/content/thumbnail/b0000211-9c22-4e7b-a15b-e56d31f31865.png", "price": "0.50"}
    ]
}

function get(id) {
    return new Promise(resolve => {
        resolve(data[id])
    })
}

function set(id, content) {
    return new Promise(resolve => {
        try {
            data[id] = content
            resolve(true)
        }catch(e) {
            resolve(false)
        }
    })
}

export default function database(config) {
    if(!config) config = {}
    if(!bufferedDB || config.force) return new Promise(resolve => {
        bufferedDB = {
            "get": get,
            "set": set
        }
        resolve(bufferedDB)
    })
    else return bufferedDB;
}