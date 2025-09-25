package com.quoctd.opopbackend.model;

public class Result {
    private int resultCd;
    private String resultMsg;

    public Result(int resultCd, String resultMsg) {
        this.resultCd = resultCd;
        this.resultMsg = resultMsg;
    }

    public int getResultCd() { return resultCd; }
    public void setResultCd(int resultCd) { this.resultCd = resultCd; }

    public String getResultMsg() { return resultMsg; }
    public void setResultMsg(String resultMsg) { this.resultMsg = resultMsg; }
}
