import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://riomiodlxskcqriigpnx.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJpb21pb2RseHNrY3FyaWlncG54Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkxMTA1MTksImV4cCI6MjA0NDY4NjUxOX0.t2Po9_MnQTGPtVe62oQBOvGZztgcc2tuqk-2SbMHQBA",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJpb21pb2RseHNrY3FyaWlncG54Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyOTExMDUxOSwiZXhwIjoyMDQ0Njg2NTE5fQ.ockkwuSxKVhMkAerj-aiQSTIqbqtF4xJUTCysoi3_PI"
    }
})