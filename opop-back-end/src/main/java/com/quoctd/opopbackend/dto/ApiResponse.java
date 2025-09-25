package com.quoctd.opopbackend.dto;

import com.quoctd.opopbackend.model.Result;

public class ApiResponse<T> {
    private Result result;
    private T value;

    public ApiResponse(Result result, T value) {
        this.result = result;
        this.value = value;
    }

    public Result getResult() {
        return result;
    }

    public void setResult(Result result) {
        this.result = result;
    }

    public T getValue() {
        return value;
    }

    public void setValue(T value) {
        this.value = value;
    }
}
