const $buttonSearch = document.querySelector('#button-search')

const LOW_TEMPERATURE = 'low-temperature'
const GHOST_ORB = 'ghost-orb'
const EMF_5 = 'emf-5'
const GHOST_WRITING = 'ghost-writing'
const FINGERPRINTS = 'fingerprints'
const SPIRIT_BOX = 'spirit-box'

const EVIDENCE_DICTIONARY = []

EVIDENCE_DICTIONARY[LOW_TEMPERATURE] = 'Temperatura Baixa'
EVIDENCE_DICTIONARY[GHOST_ORB] = 'Orbe Fantasma'
EVIDENCE_DICTIONARY[EMF_5] = 'EMF Nível-5'
EVIDENCE_DICTIONARY[GHOST_WRITING] = 'Escrita Fantasma'
EVIDENCE_DICTIONARY[FINGERPRINTS] = 'Impressões Digitais'
EVIDENCE_DICTIONARY[SPIRIT_BOX] = 'Spirit Box'

const PHANTOMS = [
    {
        name: 'Espirito',
        evidences: [SPIRIT_BOX, FINGERPRINTS, GHOST_WRITING]
    },

    {
        name: 'Wraith',
        evidences: [FINGERPRINTS, LOW_TEMPERATURE, SPIRIT_BOX]
    },

    {
        name: 'Espectro',
        evidences: [EMF_5, GHOST_ORB, LOW_TEMPERATURE]
    },

    {
        name: 'Poltergeist',
        evidences: [SPIRIT_BOX, FINGERPRINTS, GHOST_ORB]
    },

    {
        name: 'Banshee',
        evidences: [EMF_5, FINGERPRINTS, LOW_TEMPERATURE]
    },

    {
        name: 'Jinn',
        evidences: [SPIRIT_BOX, GHOST_ORB, EMF_5]
    },

    {
        name: 'Mare',
        evidences: [SPIRIT_BOX, GHOST_ORB, LOW_TEMPERATURE]
    },

    {
        name: 'Revenant',
        evidences: [EMF_5, FINGERPRINTS, GHOST_WRITING]
    },

    {
        name: 'Assombração',
        evidences: [EMF_5, GHOST_ORB, GHOST_WRITING]
    },

    {
        name: 'Demônio',
        evidences: [SPIRIT_BOX, GHOST_WRITING, LOW_TEMPERATURE]
    },

    {
        name: 'Yurei',
        evidences: [GHOST_ORB, GHOST_WRITING, LOW_TEMPERATURE]
    },

    {
        name: 'Oni',
        evidences: [EMF_5, SPIRIT_BOX, GHOST_WRITING]
    }

]

function verifyRadioCheck() {
    const evidences = getEvidence()

    console.log('evidencias: ', evidences);

    const ghosts = getGhost(evidences)
}

function getEvidence() {
    const $inputs = document.querySelectorAll('.evidences input:checked')

    const inputDataArray = []

    $inputs.forEach(function ($input) {
        const dataEvidence = $input.dataset.evidence
        inputDataArray.push(dataEvidence)
    })

    return inputDataArray
}

function getGhost(evidences) {
    let remainingPhantons = [...PHANTOMS]

    evidences.forEach(function (evidence) {
        remainingPhantons = remainingPhantons.filter(function (phantom) {
            return phantom.evidences.includes(evidence)
        })        
    })
    
    return remainingPhantons
}

$buttonSearch.addEventListener('click', function (event) {
    event.preventDefault()
    verifyRadioCheck()
})