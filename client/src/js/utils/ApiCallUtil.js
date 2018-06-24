export const callSearchApi = async (filters) => {
    const response = await fetch('/api/fetchJobs', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            page: filters.page,
            per_page: 5,
            filters: filters
        })
    });
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
};

export const callJobTypeApi = async () => {
    const response = await fetch('/api/fetchJobTypes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            page: 1,
            per_page: 10,
            filters: {}
        })
    });
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
};

export const callSkillSetApi = async () => {
    const response = await fetch('/api/fetchSkillSets', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            page: 1,
            per_page: 30,
            filters: {}
        })
    });
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
};

export const callLocationsApi = async () => {
    const response = await fetch('/api/fetchLocations', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            page: 1,
            per_page: 1000,
            filters: {}
        })
    });
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
};

export const callJobFieldsApi = async () => {
    const response = await fetch('/api/fetchJobFields', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            page: 1,
            per_page: 20,
            filters: {}
        })
    });
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
};

export const callExperiencesApi = async () => {
    const response = await fetch('/api/fetchExperiences', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            page: 1,
            per_page: 10,
            filters: {}
        })
    });
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
};

export const callLanguagesApi = async () => {
    const response = await fetch('/api/fetchLanguages', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            page: 1,
            per_page: 10,
            filters: {}
        })
    });
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
};