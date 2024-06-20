import xml2js from 'xml2js';

export type BookType = {
    title: string;
    creator: string;
    collectionDb: string;
    extent: string;
    description: string;
    url: string;
    affiliation: string;
    subDescription: string;
    spatialCoverage: string;
    person: string;
};

export async function getBookInfo(): Promise<BookType[]> {
    try {
        const response = await fetch(
            `http://api.kcisa.kr/openapi/service/rest/meta16/getNlTot?serviceKey=${process.env.SERVICE_KEY}`
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const xml = await response.text();

        const parser = new xml2js.Parser({ explicitArray: false });
        const json = await parser.parseStringPromise(xml);

        const items = json.response.body.items.item;

        return Array.isArray(items) ? items : [items];
    } catch (error) {
        console.error('Error fetching or parsing book info:', error);
        return [];
    }
}
